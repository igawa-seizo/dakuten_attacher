# DakutenAttacher
## 概要
「あ゛」の様な濁音が存在しない仮名に、濁点を綺麗に組むInDesign用スクリプトです。
濁点をルビとして組みオフセット値の調整を自動化することで、濁音仮名を作ります。

![濁点仮名](https://raw.githubusercontent.com/igawa-seizo/dakuten_attacher/master/img/after_run.PNG "実行前")
![濁点仮名](https://raw.githubusercontent.com/igawa-seizo/dakuten_attacher/master/img/before_run.PNG "実行後")

## 動作環境
- InDesign CS6以上

## インストール方法
下記のファイルをInDesignのスクリプトディレクトリに配置してください。

- DakutenAttacher.jsx

## アンインストール方法
上記のファイルを削除するだけで完了です。

## 使用方法
Adobe InDesign上のスクリプトパネルから「DakutenAttacher.jsx」をダブルクリックしてだくさい。以下の処理が実行されます。変換中はInDesignの操作は一切できませんので注意してください。

- ストーリー上にある「あ゛」の様な「仮名＋濁点」の表記を検索して濁音仮名として組む
- 選択範囲内の仮名を濁音仮名として組む

- 上記の処理で対象とされる仮名は次のとおりです。

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
本文文字サイズ10Q〜16Q（7ポイント〜11ポイント）を想定しています

基本的にどのフォントでも濁点仮名は付けられます。動作確認は以下のフォントで行いました。
  - リュウミンL
  - ヒラギノ明朝W3
  - 秀英明朝体L
  - りょうテキスト
  
フォントによっては濁点と仮名がくっつくかもしれませんが、このスクリプトはフォントごとの見栄えの調整は現バージョンでは一切行っていません。

## 免責事項
本プログラムを使用したことによって生じた如何なる結果について、製作者は一切の責任を負いかねます。

## 使用許諾条件
本プログラムの使用許諾条件はThe MIT Licenseに準じます。

## 著作権表示
Copyright 2017 IGAWA, Seizo.