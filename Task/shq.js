/*
�������:����Ȧ �̵���������
����ʱ�䣺2021-04-09 @����
�ű�˵��������Ȧ�Զ��Ķ�
�ű�Ϊ�Զ��������Ȧ����������
4.9�޸���������Ϊ���شʿ��������,�����Լ��ʵ����һЩ���Ҿ�������,ֻ����65��
�벻Ҫ����˽ű�,�벻Ҫ����˽ű�,�벻Ҫ����˽ű���
�����ܽű�ÿ��ͱ�����Ǯ���ֶ�ȥת�����µ�����Ȧ,��ëһ����
��ת���Լ�����Ȧ��λ���������¡����¿���ȥ΢��������λ������һЩ�������ź�ת�ء����¿�ת�ػ�ֱ�Ӹ���ճ����ԭ������,ֻҪ��������ʮ��Ǯһƪ���ж�ԭ��1Ԫһ��
���˹��ں�,��Щ�ű�����ֻ�ᷢ�������ں�,�����Լ�͵ߣ��,bug����ˢ֮���,�����ڸ���һЩ���°ɡ�����������ǹ��ںŶ�ά��
https://ae01.alicdn.com/kf/Ub229d86c9337410ebe479afe22226c9aV.jpg
���ƴ��������ӵ�΢�Ŵ��Ķ�����������Ȧ,�һ�������Ǯ������,лл��ҡ�
https://tz.fafengtuqiang.cn/weizhan/article/109912864/31896564367/1568637/510227705367/1080334
�����̵���������,΢���뵽,ע������������,֮��ÿ�����
���ű���ѧϰΪ����
ʹ�÷���:��ҳ�ҵ������н�,���ȥ����ȡ���ݳɹ�
TG�籨Ⱥ: https://t.me/hahaha8028
ע������:�ؿ���
�ű�Ĭ�����۷�ʽΪʹ�����±�������,���ȥboxjs�Զ�����������������Զ��������,����̫�������۶�����ͬ������,�������׳����⣬���ֵ�������û�������н���������Ҫ�Լ��л�����,�״δ������ð�����Ķ�λȨ�޹ر�
�ɲ��������н��ĵ���: ��Щ������@ziye�����ṩ,������С�
���� ���� ̩�� ���� Ȫ�� �ϲ� ���� ��̨ ���� ���� ֣�� ���� ���� �ܿ� ʮ�� ���� Т�� ���� ���� �Թ� �˱�
���ϵ����벻Ҫ�������ѵ�һ���ط�,�Լ����ѡһ�����������˺�ֱ���˳���¼,���ž���,����Ҫʹ��ж�ش�,ȥ����Ȧ���ںŰ�һ���˺ž�����,���˺��뾡���������棬���ÿ��ȥboxjs�޸�һ���Զ������۵�����,����޶ȵķ�ֹ�ںš�
boxjs��ַ :  
https://raw.githubusercontent.com/age174/-/main/feizao.box.json
����Ȧ
ȦX�������£�����������в���
[task_local]
#����Ȧ
0-59 9,12,22 * * * https://raw.githubusercontent.com/age174/-/main/shq.js, tag=����Ȧ, img-url=https://ftp.bmp.ovh/imgs/2021/04/e2b32e2eb2ad0cd3.png, enabled=true
[rewrite_local]
#����Ȧ
https://ex.jwshq.cn/app/commentator/getActivityItemPage url script-request-header https://raw.githubusercontent.com/age174/-/main/shq.js
#loon
https://ex.jwshq.cn/app/commentator/getActivityItemPage script-path=https://raw.githubusercontent.com/age174/-/main/shq.js, requires-header=true, timeout=10, tag=����Ȧ
#surge
����Ȧ = type=http-request,pattern=https://ex.jwshq.cn/app/commentator/getActivityItemPage,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/shq.js,script-update-interval=0
[MITM]
hostname = ex.jwshq.cn
*/

const $ = new Env('����Ȧ�Զ�����');
let status;
status = (status = ($.getval("shqstatus") || "1") ) > 1 ? `${status}` : ""; // �˺���չ�ַ�
const shqurlArr = [], shqhdArr = [],shqcount = ''
let times = Math.round(Date.now() / 1000)
let shqurl = $.getdata('shqurl')
let shqhd = $.getdata('shqhd')
let shqkey = '',id = '',uid='',tid=''
let nr = ($.getval('nr') || '');//�Զ�����������
let txje = 15 //�ڴ˴��޸�һ����Ҫ���ֵĽ��,�ɶ����Լ�������޸�����,֧��С��������,�����ֶ����нű���������,΢���뵽,�ǵð��Լ���΢��
let kg = 0  //���ֿ���,Ĭ�Ϲر�,��Ϊ1�ֶ�ִ��һ�ο�����
let sjpl = ['���������ϲ���¶��������ǲ�ϲ��ʧ�����ˡ�','�����ļ�԰,���������.����?�����˼��ɾ�?�������ᣬ��������','�������������ʻ��£�Ψ����������������','���ļ������������У���������','���������������ԣ�����������Ϣ������������磬������һ�����������硣','������ĳ�ʵ�ˣ��˾Ͳ����ˡ�','̫��λ�˾����ıʼ���������������������԰��','�������죬������ֿ���ı��������ṹ���أ�ѧϰ���������ѵļ�����','�Լ��峤���������Ȱ���ĸ���ǵ�������','��ʱ��Ӧ�����ĸ���������Լ����򳵵�����������¥�ϵ��ܽᾫ�٣�Ц���ˣ�','�ݶ������ˣ���Ʒ�����䡢���١��������м�������������һЩ�������ʵ���Ǹ�','�������´������м���������������һЩ����������ѧϵ�����Ρ����á��Ļ����ں��������  ����  Ц����','���Լ���   ɷ�н������½�ʳ�ں����','.Ŭ�����Ͻ�������Ϊ���������˿�����Ϊ�˲������Լ���������������','������������ǻ᲻���н����','����һ��������ˣ��α�ǿ����','���ϧ��û�������������ҡ�','���µ��ţ��⾳��Զ�����Ĭ �⾳��Զ','��������~~���������������ʫ�黭�⣬���ͣ�','��֮����������Ϊ������񣬸���Ϊ����ţ��Ѫ������������������ʥ�������ش��������ն��ס�','һ�����۾ͽ��������ǵĸ��顣','û�б����ڵ����⡢���긲�ǡ�','��������ͬ���������������£���������Ҫ�������ǻ����������쵼��','ɽ��ˮ���鶯��ϲ����лл����','�ľ��Ĺŵ仭�棬���µ�����֮����������٣��������飡�ǳ�ϲ����лл��','�д��⣬�Ҷ���Ȥ��Ȥ��ֵ��ζ��','�����ܽ���֪ʶ���۵ĺ÷���֮һ��','��Ȼ���ջ���Ѱ�������ֿ������Һ�','ʱ��ı������ǣ�����˵�����','��ֻ�Ǿ��ú�����˼����Щ�����е�������Щ��������ʵ�����е���Ӱ�������������鲻�õ�ʱ�������������һ��','����֮�����������ȼ������֮����ƴ����ǰ��','�ٳ���·��һ����Ҳ�����꣬�ٶ̵�·��������˫��Ҳ�޷�����','��־������ǧ����ƣ���־��ֻ��ǧ������','��һ���˿��԰ٿ����ᣬ��һ����һ��ʶ�;�����ܰ.','ӵ������ֻ��һ��������ʵ���������һ������','��һǻ����д��������ư��磬�������ߣ��������֣�������!!!','��ʫζʫ��ʫ�飬���е����顣���ο�','������Щ���������ʫ�ʣ��������Ǹ���зḻ������Ƹе��ˣ�','һ����˼ծ�ѻ�����Ը����������','���ϵ������˳���ֻԵһ�������','��ĿԶɽ����ɫ��ˮ�л�����濾�','������ɽ�����ȣ�ȴʫ����ǧ','��һ�ְ�Ѥ���糯ϼ����һ��������ƴ󺣣���һ�ְ���˽����η����һ����������ػ�','�����ű�һϮ�»���ɴ�����ŵ���ˮ���ˣ�������һ�ֲ�����״�����������У���ͻȻ��������Χ�Ŀ�������û������','ų����Ϊ �����л������ҹ���','��ȵ���Ӧ���ϳͣ�ȱ�����ʵ�����ôԽ��Խ�࣡�����������°�','���μ��������һ������:�к�̨�������������ؼ��ˣ�û��̨�ľ�ֱ�Ӹ�������','�W����˼�t�裬˼�����W�t��','���԰�˭���������أ��˸��ѱ�','ֻ��һ���»�ʹ��ƣ�ͣ����Ҳ���������Ѷϡ�','�����й���ɫ��ᣬֻҪ�����ӡ���λ, �����¶����ܷ���','���������Ѵ���С���������У������Ӵ���ʲô����','���以Ϊ�˼䣬�����Գ����档','�����Ǻ���Ҫ����Ҫ������ʧȥ���ǡ����Ǳ�ʧȥ�˸�','�ǳ���������һ��ȹ���ÿһ���ӣ�ϣ����ʹ��ÿʱÿ�̶����ģ�����������ָо������ۣ������������ټ���','�W����˼�t�裬˼�����W�t��','��һ��������ʵ�Ĵ�ֳ�����˼��������⣬','������Ҫһ�������д���ǿӲ������','��л�ϲԣ�ʹ������������Ը�ϲԱ��������������ϣ�Ը���ǳ���ۣ���������','�Դ��ҵõ���İ��������������ĺڰ��м����˹������������ޱߵ�ɳĮ�еõ�����Ȫ����������ɽʯ�з�����һ֦�ʻ��������ܲ���л���أ�','�����Ǻ����������ۣ��������ۡ������Ǻ���������飬���Ծ��ʣ�','��ʹ������ˣ��������˽ŷ��ţ��ܵ��Ǻܲ��������������ķ��񣻺ܽ��Ǻ����ƣ�Σ�������뷢������ƽ������ο�����������ļ�ǿ���ܸж��ܸ�л--�㣡','����һ�νӵ����ף���ø��ˣ�Ҳ�����⡣���лл���ܼǵ��ң�Ը���˳�������ߣ���������飡','����δ���ĵ�·��ɽ·��᫡�����ֻҪ������飬�ٿ�Ҳ�������ۡ���������ɽ���󿴵��ķ羰��������','��л�ϲԸ�����һ���ر������Ǿ����㣡�����������ọ́������������һ�����Ҹ�']
let sjs = Math.floor(Math.random() * 65); //���������ĿǰΪ65���������,�����Լ����,����꼸������65��������Լ���ӵ����������Լ������5��,65�ĳ�70,��ӷ�ʽΪ���Ϸ����������������䡣Ӣ�Ķ������,''�����������������䡣??:    ����һ������ ,'����һ������'

!(async () => {
  if (typeof $request !== "undefined") {
    await shqck()
   
  } else {shqurlArr.push($.getdata('shqurl'))
    shqhdArr.push($.getdata('shqhd'))
    let shqcount = ($.getval('shqcount') || '1');
  for (let i = 2; i <= shqcount; i++) {
    shqurlArr.push($.getdata(`shqurl${i}`))
    shqhdArr.push($.getdata(`shqhd${i}`))
  }
    console.log(`------------- ��${shqhdArr.length}���˺�-------------\n`)
      for (let i = 0; i < shqhdArr.length; i++) {
        if (shqhdArr[i]) {
         
          shqurl = shqurlArr[i];
          shqhd = shqhdArr[i];
          $.index = i + 1;
          console.log(`\n��ʼ������Ȧ${$.index}��`)
          await shqlb();
          await shqxx();
          if(kg == 1){
          await shqtx();
}
          

  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//����Ȧ���ݻ�ȡ


function shqck() {
   if ($request.url.indexOf("start=") > -1) {
 const shqurl = $request.url
  if(shqurl)     $.setdata(shqurl,`shqurl${status}`)
    $.log(shqurl)
  const shqhd = JSON.stringify($request.headers)
        if(shqhd)    $.setdata(shqhd,`shqhd${status}`)
$.log(shqhd)
   $.msg($.name,"",'����Ȧ'+`${status}` +'���ݻ�ȡ�ɹ���')
  }
}






//����Ȧ�����б�
function shqlb(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : `https://ex.jwshq.cn/app/commentator/getActivityItemPage?start=0&limit=1`,
        headers : JSON.parse(shqhd),
       
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code== 0){
if(result.data.data[0] == undefined){
$.log('\n����Ȧû��ƥ�䵽�����б�')
}
name = result.data.data[0].title
name = encodeURI(sjpl[sjs]+nr)
key = result.data.data[0].articleId
        console.log('\n����Ȧ��ȡ����ID�ɹ�\n��ǰ����ID: '+key+'\n���±���:'+result.data.data[0].title+'\n��ʼ�ύ�������:'+sjpl[sjs]+nr)
  //$.log(name)
        await $.wait(1000);
        await shqtj()
} else {
       console.log('\n����Ȧ��ȡ����IDʧ��  '+result.msg)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}



//����Ȧ�ύ
function shqtj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/commentator/comment",
        headers : JSON.parse(shqhd),
        body : `imageId=&articleId=${key}&text=${name}&sign=0`,
}
      $.post(url, async (err, resp, data) => {
        try {

           
    const result = JSON.parse(data)
        if(result.data.award == 3){
        console.log('\n����Ȧ�ύ���۳ɹ�,���'+result.data.award+'���ֽ���')
       await $.wait(1000);
       await shqtq()
       
} else {
       console.log('\n����Ȧ����'+result.data.message)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//����Ȧ��ȡ�ֽ�
function shqtq(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/commentator/increaseBalance",
        headers : JSON.parse(shqhd),
        
}
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.data == true){
        console.log('\n����Ȧ������ȡ�ֽ�ɹ�')
       //await $.wait(1000);
        //await shqlb()
} else {
       console.log('\n����Ȧ������ȡ�ֽ�ʧ��')

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//����Ȧ����
function shqtx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/wx/withdraw",
        headers : JSON.parse(shqhd),
        body : 'amount='+txje,
        
}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
        console.log(`\n����Ȧ����:${result.data.message}`)
      
} else {
       console.log('\n����Ȧ���ִ���'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//����Ȧ��Ϣ
function shqxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://ex.jwshq.cn/app/commentator/commentAwardInfo",
        headers : JSON.parse(shqhd),
}
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 0){
uid = result.data.awardAmountToday / 100
tid = result.data.awardAmountTotal / 100
        console.log(`\n����Ȧ��������������:${result.data.commentNum}\n���չ����:${uid}Ԫ\n�ҵ�������:${tid}Ԫ`)
      
} else {
       console.log('\n����Ȧ����'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}