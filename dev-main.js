$( document ).ready(function() {
	$('button').click(function(){
		eval($('#code').val());

		if(window.component)
			$('#demo_name').html(component.name);
	});
});

let menuUl = $('.middle_1_cen_small3 ul');

let menus = [
	{
		name : '難字',
		script : `
			let target = $('#qqq1')
			// 初始化難字
			Geps3.CNS.changeCNS({
				jelm : target ,
				// 初始化成功
				loadFinish : ()=>{
					Geps3.CNS.bindChangeEvent(target ,(e)=>{
					  // 變更後進入該方法，並取得該元素值
					  let cnsVal = Geps3.CNS.getCNSVal( target )
					  $('#demo_msg').html( Geps3.CNS.pageCode2Img(cnsVal) )
					});

				}
			})
		`
	},
	{
		name : '下拉選單',
		script : `
var config = {
	element : document.getElementById('demo_scope'),
	isMultiple : true,
	options : { no_results_text : '請選擇', } ,
	defaultValue:['2'],
	selectData :[{label:'label_1',value:1},{label:'label_2',value:2}],
	onChange : function(data){
		console.log(data)
	}
}
window.component = new Geps3.Select(config);

		`
	},
	{
		name : '年月',
		script : `
var config = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.YearMonth(config);
		`
	},
	{
		name : '地址',
		script : `
var config = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.Address(config);
		`
	},{
		name : '英數字檢核',
		script : `
var alphanumericConfig = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.Alphanumeric(alphanumericConfig);
		`
	},{
		name : '決標方式',
		script : `
var awardWayConfig = {
	element : document.getElementById('demo_scope'),
	callback : function(awardWayVo){console.log(awardWayVo);}
}
window.component = new Geps3.AwardWay(awardWayConfig);
		`
	},{
		name : '履約地點',
		script : `
var celocationConfig = {
	element : document.getElementById('demo_scope'),defaultValue :['離島地區－全區','基隆市－全區','南投縣－竹山']
}
window.component = new Geps3.Celocation(celocationConfig);
		`
	},{
		name : '履約地點(全部)',
		script : `
var allCelocationConfig = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.AllCelocation(allCelocationConfig);
		`
	},{
		name : '組織名稱/統一編號互查',
		script : `
var companyConfig = {
	element : document.getElementById('demo_scope'),
	fetchMode : 'always_local',
	hasBranch : true,
	callback : (e)=>{
		console.log(e)
	}
}
window.component = new Geps3.Company(companyConfig);
		`
	},{
		name : '所有國家',
		script : `
var countryConfig = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.Country(countryConfig);
		`
	},{
		name : '國家碼',
		script : `
var countryCodeConfig = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.CountryCode(countryCodeConfig);
		`
	},{
		name : '標的中文分類',
		script : `
var cpcConfig = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.Cpc(cpcConfig);
		`
	},{
		name : '標的分類顯示中文元件',
		script : `
window.component = {name:'標的分類顯示中文元件'};

let isQueryPk = false;
if(isQueryPk ){
	Geps3.CpcModel.byPk(1, 'tw', callback);
}else{
	Geps3.CpcModel.byCode(71, 'tw', callback);
}

function callback(success, result){
	if(success){
		if(result){
			render(result);
		}
	}
};

function render(result){
	$('#demo_scope').find('.showValue').remove();
	$('#demo_scope').append(\`
		<div>
			<button  type="button" class="showValue" data-value="\$\{result.code\}"> 取得標的分類代碼 </button>
			<button  type="button" class="showValue" data-value="\$\{result.name\}"> 取得標的中文名稱 </button>
			<button  type="button" class="showValue" data-value="\$\{result.typeName\}"> 取得標的分類 </button>
			<button  type="button" class="showValue" data-value="\$\{result.id\}"> 取得標的PK </button>
		</div>
	\`);

	$('#qqq1').val(result.name);
	$('.showValue').click(function(){
		let value = $(this).data('value');
		alert(value);
	});
};
		`
	},{
		name : '標的分類顯示英文元件',
		script : `
window.component = {name:'標的分類顯示英文元件'};

let isQueryPk = true;
if(isQueryPk ){
	Geps3.CpcModel.byPk(1, 'en', callback);
}else{
	Geps3.CpcModel.byCode(71, 'en', callback);
}

function callback(success, result){
	if(success){
		if(result){
			render(result);
		}
	}
};

function render(result){
	$('#demo_scope').find('.showValue').remove();
	$('#demo_scope').append(\`
		<div>
			<button  type="button" class="showValue" data-value="\$\{result.code\}"> 取得標的分類代碼 </button>
			<button  type="button" class="showValue" data-value="\$\{result.name\}"> 取得標的英文名稱 </button>
			<button  type="button" class="showValue" data-value="\$\{result.typeName\}"> 取得標的分類 </button>
			<button  type="button" class="showValue" data-value="\$\{result.id\}"> 取得標的PK </button>
		</div>
	\`);

	$('#qqq1').css("width", "500px").val(result.name);
	$('.showValue').click(function(){
		let value = $(this).data('value');
		alert(value);
	});

};
		`
	},{
		name : '數字轉換金額格式',
		script : `
var currencyConfig = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.Currency(currencyConfig);
		`
	},{
		name : '日期',
		script : `
		var tenderQueryConfig = {
			debug: false,
			element : document.getElementById('demo_scope'),
			type : 'yyy/MM/dd',
			defaultValue : '2020/01/01',
			callback(data) {console.log('callback', data)}
		}
		window.component = new Geps3.DatePicker(tenderQueryConfig);
		`
	},{
		name : 'Dialog 使用日期',
		script : `
		Geps3.Dialog.o('<div id="divDialog"></div>',300,500)
		   var tenderQueryConfig = {
		   element : document.getElementById('divDialog'),
		   type : 'yyy/MM/dd',
		   defaultValue : '109/01/01',
		}
		window.component = new Geps3.DatePicker(tenderQueryConfig);
		`
	},{
		name : '傳真',
		script : `
var faxConfig = {
	element : document.getElementById('demo_scope'),
	callback : function(faxVo){console.log(faxVo);}
}
window.component = new Geps3.Fax(faxConfig);
		`
	},{
		name : '性別',
		script : `
var genderConfig = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.Gender(genderConfig);
		`
	},{
		name : '證號檢核',
		script : `
var idValidateConfig = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.IdValidate(idValidateConfig);
		`
	},{
		name : '亂數圖片驗證元件',
		script : `
var imageVerificationConfig = {
	element : document.getElementById('demo_scope'),
	lang : 'en',
	callback : function(result){
		console.log(result)
		if(result.success){
			alert('成功')
		}else{
			alert('失敗')
		}
	}
}
window.component = new Geps3.ImageVerification(imageVerificationConfig);
		`
	},{
		name : '法規小幫手',
		script : `
var lawConfig = {
	element : document.getElementById('demo_scope'),
	defaultValue : {
		code1 : 'PMS-001',
		code2 : 'PMS-002'
	},
	// index 為選填，可選擇要顯示的資料項次
	// index : 0
}
window.component = new Geps3.Law(lawConfig);
		`
	},{
		name : '手機號碼',
		script : `
var mobileConfig = {
	element : document.getElementById('demo_scope'),
	callback : function(mobileVo){console.log(mobileVo);}
}
window.component = new Geps3.Mobile(mobileConfig);
		`
	},{
		name : '機關階層選取機關全名',
		script : `
var orgLevelConfig = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.OrgLevel(orgLevelConfig);
		`
	},{
		name : '機關代碼查機關名稱',
		script : `
var orgQueryConfig = {
	element : document.getElementById('demo_scope'),
	// 機關狀態（Y：啟用、N：停用、X：未開通、D：裁撤、O：靜止帳戶、L：鎖定、未填寫：全部）
	active : 'Y', 
	// 類別（A：全部，C：法人，G：機關）
	type : 'A',
}
window.component = new Geps3.OrgQuery(orgQueryConfig);
		`
	},{
		name : '聯絡電話（市話）',
		script : `
var phoneConfig = {
	element : document.getElementById('demo_scope'),
	callback : function(phoneVo){console.log(phoneVo);}
}
window.component = new Geps3.Phone(phoneConfig);
		`
	},{
		name : '標案案號查標案名稱',
		script : `
var tenderQueryConfig = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.TenderQuery(tenderQueryConfig);
		`
	},{
		name : '標案案號輸入',
		script : `
window.component = {name:'標案案號'};
$('#demo_scope').append('<button  type="button" id="searchBt"> 查詢 </button>');
$('#qqq1').val('1081023A54');

$('#searchBt').click(()=>{
    let no =  $('#qqq1').val();
	Geps3.TenderQueryModel.byNo({
		tenderId:no,
		orgId : '3', // 機關代碼鎖定設定
	}, function(success, result){
		if(success){
			if(result){
				$('#demo_msg').html(result.tenderName);
			}else{
				$('#demo_msg').html('查無標案資料');
			}
		}else{
			$('#demo_msg').html(result);
		}
	});
});
		`
	},{
		name : '招標方式',
		script : `
var tenderWayConfig = {
	element : document.getElementById('demo_scope')
}
window.component = new Geps3.TenderWay(tenderWayConfig);
		`
	},{
		name : '提示小秘書',
		script : `Geps3.Tooltip.exec();`
	},{
		name : '前端表格',
		script :
		`
function timeToDate(timestamp){
	let date = new Date(timestamp);
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [date.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('/');
}

function timeToDate(timestamp){
	let date = new Date(timestamp);
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [date.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('/');
}

let gepComponent = new Geps3.DataTable({
	targetEl : $('#demo_scope'),
	data : [
		{ id : 1 , name : 'bill 1' ,birthday : 1583735999907 },
		{ id : 2 , name : 'bill 2' ,birthday : 1583735999907 },
		{ id : 3 , name : 'bill 3' ,birthday : 1583735999907 },
		{ id : 4 , name : 'bill 4' ,birthday : 1583735999907 },
		{ id : 5 , name : 'bill 5' ,birthday : 1583735999907 },
		{ id : 6 , name : 'bill 6' ,birthday : 1583735999907 },
		{ id : 7 , name : 'bill 7' ,birthday : 1583735999907 },
		{ id : 8 , name : 'bill 8' ,birthday : 1583735999907 },
		{ id : 9 , name : 'bill 9' ,birthday : 1583735999907 },
		{ id : 10 , name : 'bill 10' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 15 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 16 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 17 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 18 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 19 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 20 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 21 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 22 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 23 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 24 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 25 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 26 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 27 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 28 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 29 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 30 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 31 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 32 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 33 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 34 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 35 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 36 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 37 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 38 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 39 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 40 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 41 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 42 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 43 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 44 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 45 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 46 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 47 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 48 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 49 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 50 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 51 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 52 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 53 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 54 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 55 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 56 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
		{ id : 11 , name : 'bill 11' ,birthday : 1583735999907 },
		{ id : 12 , name : 'bill 12' ,birthday : 1583735999907 },
		{ id : 13 , name : 'bill 13' ,birthday : 1583735999907 },
		{ id : 14 , name : 'bill 14' ,birthday : 1583735999907 },
	],
	titles : [
	{ name : '編號' ,cls : 'tc'},
	{ name : '姓名' , cls : 'tl'},
	{ name : '生日' }
	],
	cols : [
		{ fieldName : 'id' , cls : 'tc', sortStatus: false },
		{ fieldName : 'name' , cls : 'tc', callback:function(v){
			return $('<h1>姓名'+v+'</h1>');
		}},
		{ fieldName : 'birthday' , sortStatus: true, callback :  timeToDate},
	],
	afterRender : function(self){
		console.log('afterRender ', self)
	}
	})

		`
	},{
		name : '表單驗證',
		script : `
		/*
 			在驗證屬性添加 data-validate="require",
 			若有特定錯誤訊息元素添加 data-msgid="elementId"
		*/
			let ruleConfig = {
				message : '請輸入數字 1',
				check:(v,e)=>{
					// v ：取得 val()
					// e ：取得該元素

					return (v===1)?true:false
				}
			}

			let validate = new Geps3.Validate({
				"element" : $('#demo_scope').get(0),
			})
			validate.addRule('tptime',ruleConfig)

			$('#demo_scope a').click(function(){
				validate.validation()
			})
		`,
		id : 'formValidate',
	},{
		name : '公鑰自動註冊',
		script : `
		var publicKeyConfig = {
			element : document.getElementById('demo_scope')
		}
		window.component = new Geps3.PublicKey(publicKeyConfig);
		`
	},
];

menus.forEach(function(vo,i){
	let ul = $(`<li class="t_menu_a"> <a href="#" class="xz">${vo.name}</a></li>`);
	ul.click(function(e){
		$('#code').html(vo.script);
		if(vo.id === 'formValidate'){
			$('#demo_scope').html(`
<table class="tb_04" summary="各廠商自填">
        <tbody><tr class="tb_s06">
          <td headers="tb_02" class="tbg_4 atsp">標案案號 </td>
          <td headers="tb_02" class="tbg_2">1865468<div class="tbc2R"><a href="**">法源</a></div></td>
        </tr>
        <tr class="tb_s07">
          <td headers="tb_02" class="tbg_4 atsp">財物採購性質</td>
          <td headers="tb_02" class="tbg_2"><div class="tbc2L">
          	<div class="m1b">
              <select data-validate="require" data-msgid="errorMsgId2" >
              	<option value="">請選擇</option>
                <option value="tenderCaseNo">非屬財物之工程或勞務</option>
                <option value="tenderName">非屬財物之工程或勞務</option>
              </select>
              </div>
              <div class="m1b" id="errorMsgId2">
              </div>
            </div>
            <div class="tbc2R"><a href="**">法源</a></div></td>
        </tr>
        <tr class="tb_s06">
          <td headers="tb_02" class="tbg_4"><label for="price3">
            <p class="at3">*</p>
            預計金額
            </label></td>
          <td headers="tb_02" class="tbg_2"><div class="tbc2L">
              <div class="m1b">
              	<input type="text" data-validate="require,amt" data-msgid="errorMsgId" placeholder="700000" class="form-control w-90" name="price3" id="price3">元
              </div>
              <div class="m1b" id="errorMsgId" style="background-color:yellow">
              </div>
            </div>
            <div class="tbc2R"><a href="**">法源</a></div></td>
        </tr>
        <tr class="tb_s06">
          <td headers="tb_02" class="tbg_4"><label for="price3">
            <p class="at3">*</p>
            測試輸入欄位
            </label></td>
          <td headers="tb_02" class="tbg_2"><div class="tbc2L">
              <div class="m1b">
              <input type="text" data-validate="require" class="form-control w-90" name="price3" id="price3"></div>
            </div>
            </td>
        </tr>     <tr class="tb_s06">
		<td headers="tb_02" class="tbg_4 atsp"><label for="price4">
		  測試Mail
		  </label></td>
		<td headers="tb_02" class="tbg_2"><div class="tbc2L">
			<div class="m1b">
			<input type="text" data-validate="isMail" class="form-control w-90" name="price4" id="price4"></div>
		  </div>
		  </td>
	  </tr>
      </tbody></table>
	<div class="bt_cen2">
			  <a href="#" onclick="event.preventDefault()">驗證</a>
	  </div>
				`)
		}
		e.preventDefault();
	});
	menuUl.append(ul);
});


if (module.hot) {
	module.hot.accept('./index.js', function() {
		console.log('Accepting the updated printMe module!');

	})
}
