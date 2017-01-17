# DakutenAttacher
## 概要
「あ゛」の様な濁音が存在しない仮名に、濁点を綺麗に組むInDesign用スクリプトです。
濁点をルビとして組みオフセット値の自動調整により濁音仮名を作ります。

![濁点仮名](https://raw.githubusercontent.com/igawa-seizo/dakuten_attacher/master/static/before_after.PNG "実行前と実行後")

【スクリプトの実行前と実行後】

[スクリプトの実行見本](https://raw.githubusercontent.com/igawa-seizo/dakuten_attacher/master/static/mihon.pdf)

## 動作環境
- InDesign CS6以上

※作成者はMac OS Xを所有していないため、Mac OS X版InDesignでの動作確認はしていません

## ダウンロードページ
https://github.com/igawa-seizo/dakuten_attacher/releases

## インストール方法
下記のファイルをInDesignのスクリプトディレクトリに配置してください。

- DakutenAttacher.jsx

InDesignのスクリプトディレクトリはWindows版ですと下記の位置にあります。

- C:\Users\［ユーザ名］\AppData\Roaming\Adobe\InDesign\Version［バージョン］\ja_JP\Scripts\Scripts Panel

見つからない場合はスクリプトパネルのメニューから「エクスプローラーで表示」で直接見つけるのが確実です。

## アンインストール方法
上記のファイルを削除するだけで完了です。

## 使用方法
**実行前に対象となるテキストフレームを選択して**ください。

Adobe InDesign上のスクリプトパネルから「DakutenAttacher.jsx」をダブルクリックしてだくさい。以下の処理が同時に実行されます。変換中はInDesignの操作は一切できませんので注意してください。

- ストーリー上にある「あ゛」の様な「特定の仮名＋濁点」の表記を検索して濁音仮名として組む
- 選択されたテキスト範囲にある特定の仮名を濁音仮名に**強制変換**する

処理対象となる**特定の仮名**は次のとおりです。濁音が存在しない仮名を対象とします。

<pre>
    あいうえお
    なにぬねの
    まみむめも
    や　ゆ　よ
    らりるれろ
    わゐ　ゑを
    ん
    
    アイ　エオ
    ナニヌネノ
    マミムメモ
    ヤ　ユ　ヨ
    ラリルレロ
    ワヰ　ヱヲ
    ン
</pre>

### 注意点
本文文字サイズ10Q～16Q（7ポイント～11ポイント）を想定しています

基本的にどのフォントでも濁点仮名は付けられます。動作確認は以下のフォントで行いました。
  - リュウミンL
  - ヒラギノ明朝W3
  - 秀英明朝体L
  - りょうテキスト
  
仮名が大ぶりのフォントでは濁点と仮名がくっつくことがあります。ただ、このスクリプトはフォントごとの調整は現バージョンでは一切行っていません。

## 免責事項
本プログラムを使用したことによって生じた如何なる結果について、製作者は一切の責任を負いかねます。

## 使用許諾条件
本プログラムの使用許諾条件はThe MIT Licenseに準じます。

## 著作権表示
Copyright 2017 IGAWA, Seizo.