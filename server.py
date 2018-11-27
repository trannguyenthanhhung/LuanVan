from collections import defaultdict
import pandas as pd
import numpy as np
from pyvi import ViTokenizer
import os
# data_path = 'C:/Users/hungt/Desktop/LuanVan/train/'  

import pickle

# Tách từ trong câu (tokenize)
def segmentation(text):
    return ViTokenizer.tokenize(text)
    
# Loại bỏ kí tự đặc biệt
def split_words(text):
    text = segmentation(text)
    try:
        return [x.strip('0123456789%@$.,><=+-!;/()*"&^:#[]|\n\t\0\'').lower() for x in text.split()]
    except TypeError:
        return []
# Loại bỏ stopwords
def get_words_feature(text):
    split_word = split_words(text)
    stopwords = pd.read_csv('vietnamese-stopwords.txt', header=None)[0].tolist()
    return [word.replace('_', ' ') for word in split_word if word not in stopwords and word != '']


from flask import Flask, jsonify, request
app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

my_index = pickle.load(open('trainindex.pickle', 'rb', -1))
my_documents = pickle.load(open('documents.pickle', 'rb', -1))

def flatten(l): 
    return flatten(l[0]) + (flatten(l[1:]) if len(l) > 1 else []) if type(l) is list else [l]

def search(word):
    result = []
    for token in get_words_feature(word):
        print(token)
        isPosting = my_index.get(token)
        if isPosting:
            result.append(my_index.get(token))
    flat_list = flatten(result)
    kq2 = sorted(flat_list, key=lambda k: k['cosine'], reverse=True)
    return kq2

@app.route('/')
def hello():
    # here we want to get the value of user (i.e. ?query=some-value)
    query = request.args.get('query')

    result = search(query)
    return jsonify({'data': result})

@app.route('/content')
def getcontent():
    # here we want to get the value of user (i.e. ?file=cong_dong (10).txt)
    query = request.args.get('file')
    print(my_documents)
    result = my_documents.get(query)
    return jsonify({'data': result})
app.run(host='0.0.0.0', port=5500, debug=True)  