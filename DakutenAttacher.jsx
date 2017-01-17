//InDesign 平仮名濁点組版スクリプト
//伊川清三（IGAWA, Seizo）
//2017-01-11
//Ver 1.0

app.findChangeGrepOptions.includeLockedLayersForFind = false;//ロックされたレイヤーをふくめるかどうか
app.findChangeGrepOptions.includeLockedStoriesForFind = false;//ロックされたストーリーを含めるかどうか
app.findChangeGrepOptions.includeHiddenLayers = false;//非表示レイヤーを含めるかどうか
app.findChangeGrepOptions.includeMasterPages = false;//マスターページを含めるかどうか
app.findChangeGrepOptions.includeFootnotes = false;//脚注を含めるかどうか
app.findChangeGrepOptions.kanaSensitive = true;//カナを区別するかどうか
app.findChangeGrepOptions.widthSensitive = true;//全角半角を区別するかどうか

//ドキュメントに対してルビ組版を実行する
var Attachmenter= (function () {
     var targetKana = "あいうえおなにぬねのまみむめもやゆよらりるれろわゐゑをんアイエオナニヌネノマミムメモヤユヨラリルレロワヰヱヲン";
     var specialKana = "おにぬねのやゆイエオナニヌネノメモヤヨマラリロワヰヱヲン";
     var specialKana2 = "ア";
     var s = calcUnitScale();
     var dakuten = "゛";
     
     // コンストラクタ   
	function Attachmenter() {
        this.document  = app.activeDocument;
	}

    //仮名＋濁点の箇所を濁点付きの仮名にする
    Attachmenter.prototype.attach = function()  {
        var foundTexts = this.find_();
        var len = foundTexts.length;
        if( len === 0 ) return;
        
        for(var i = 0; i < len; i++) {
            this.attachDakuten_(foundTexts[i]);
        }
    }; 

    //選択範囲にある仮名（上記）を強制的に濁点付きの仮名にする
    Attachmenter.prototype.convert = function()  {
        if (this.document.selection.length === 0) return;
        var target = this.document.selection[0];
        for(var i=0; i < target.characters.length; i++) {
            if ( targetKana.indexOf(target.characters[i].contents) < 0 ) continue;
            
            this.attachDakuten_(target.characters[i]);
        }
    };    

    // 仮名＋濁点の箇所を検索
    Attachmenter.prototype.find_ = function()  {
        app.findGrepPreferences.findWhat = dakuten + "[" + targetKana + "]";
        var tateFound = this.document.selection[0].parentStory.findGrep();
        
        app.findGrepPreferences.findWhat = "[" + targetKana + "]" + dakuten;
        var yokoFound = this.document.selection[0].parentStory.findGrep();
        
        app.findGrepPreferences.findWhat = NothingEnum.nothing;
        
        if(tateFound.length >= yokoFound.length) return tateFound;
        else return yokoFound;
    };  

    //濁点をルビとして組む
   Attachmenter.prototype.attachDakuten_ = function (textObj) {
        if( textObj.rubyString === dakuten) return;
        
        var orgStr = String(textObj.contents);
        var newStr = orgStr.replace("゛", "");
        textObj.contents = newStr; 
        
        textObj.rubyString = dakuten;
        textObj.rubyFlag = true;
        
        textObj.rubyOpenTypePro = false;
        textObj.rubyType = RubyTypes.perCharacterRuby;
        textObj.rubyAlignment = RubyAlignments.RUBY_CENTER;
        
        var fontSize = textObj.pointSize;
        
        //以下の単位はポイント
        textObj.rubyFontSize = s * fontSize;
        
        //一部の仮名は若干位置をずらす
        if (specialKana.indexOf(textObj.contents ) >= 0)  {
            textObj.rubyXOffset = -1 * s * (fontSize / 2);
            textObj.rubyYOffset = -1 * s * (fontSize - 1);
        } else if (specialKana2.indexOf(textObj.contents ) >= 0)  {
            textObj.rubyXOffset = -1 * s * (fontSize / 2);
            textObj.rubyYOffset = -1 * s * (fontSize - 2);
        } else {
            textObj.rubyXOffset = -1 * s * ( (fontSize - 1) / 2);
            textObj.rubyYOffset = -1 * s * fontSize;
        }
        
    }

    return Attachmenter;
}());

function calcUnitScale() {
    if(app.activeDocument.viewPreferences.textSizeMeasurementUnits === MeasurementUnits.Q) return 0.25 / 0.352778;
    else return 1;
}

if (this.document.selection.length !== 0) {
    var attacher = new Attachmenter();
    attacher.attach();
    attacher.convert();
    alert ("処理が完了しました");
} else {
    alert ("対象のテキストフレームを選択してください！");
}