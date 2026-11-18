// 追加單字（每行：英文|詞性|中文）。想再加單字，直接接在後面即可。
const MORE_W=`memo|n.|備忘錄
document|n./v.|文件；記錄
file|n./v.|檔案；歸檔
draft|n./v.|草稿；起草
revise|v.|修改
edit|v.|編輯
print|v.|列印
copy|n./v.|副本；影印
envelope|n.|信封
stationery|n.|文具
supplies|n.|用品
cabinet|n.|櫃子
desk|n.|書桌
printer|n.|印表機
password|n.|密碼
network|n.|網路
software|n.|軟體
update|v./n.|更新
backup|n.|備份
download|v.|下載
recruit|v.|招募
vacancy|n.|職缺
applicant|n.|申請人
reference|n.|推薦人；參考
resign|v.|辭職
retire|v.|退休
staff|n.|職員
personnel|n.|人事；全體員工
payroll|n.|薪資單
overtime|n.|加班
vacation|n.|假期
leave|n./v.|休假；離開
absent|adj.|缺席的
attendance|n.|出席
performance|n.|表現
evaluate|v.|評估
promotion|n.|升遷；促銷
orientation|n.|新人訓練
workshop|n.|工作坊
seminar|n.|研討會
account|n.|帳戶；帳目
balance|n.|餘額
deposit|n./v.|存款；訂金
withdraw|v.|提款
transfer|v./n.|轉帳；調動
loan|n.|貸款
interest|n.|利息；興趣
tax|n.|稅
fee|n.|費用
charge|n./v.|收費
bill|n.|帳單
credit|n.|信用；賒帳
cash|n.|現金
check|n./v.|支票；檢查
estimate|n./v.|估價；估計
afford|v.|負擔得起
purchase|n./v.|購買
audit|n./v.|審計
fiscal|adj.|財政的
asset|n.|資產
consumer|n.|消費者
survey|n./v.|問卷調查
feedback|n.|回饋意見
trend|n.|趨勢
competitor|n.|競爭對手
retail|n.|零售
wholesale|n.|批發
commodity|n.|商品；日用品
merchandise|n.|商品
display|n./v.|展示
coupon|n.|優惠券
advertisement|n.|廣告
slogan|n.|標語
sample|n.|樣品
demonstrate|v.|示範
feature|n./v.|特色；以…為特色
satisfaction|n.|滿意
loyal|adj.|忠誠的
target|n./v.|目標；以…為對象
distribute|v.|分發；配銷
manufacture|v.|製造
factory|n.|工廠
assembly|n.|組裝
raw material|n.|原料
production|n.|生產
capacity|n.|產能；容量
defect|n.|瑕疵
durable|adj.|耐用的
warehouse|n.|倉庫
package|n./v.|包裹；包裝
label|n./v.|標籤
fragile|adj.|易碎的
handle|v.|處理
store|v./n.|儲存；商店
stock|n./v.|存貨；進貨
vendor|n.|廠商；小販
specification|n.|規格
prototype|n.|原型
patent|n.|專利
standard|n.|標準
itinerary|n.|行程表
departure|n.|出發
board|v.|登機；上車
gate|n.|登機門
baggage|n.|行李
customs|n.|海關
passport|n.|護照
visa|n.|簽證
commute|v./n.|通勤
transportation|n.|交通運輸
traffic|n.|交通；車流
route|n.|路線
platform|n.|月台；平台
terminal|n.|航廈；終點站
rental|n.|租賃
sightseeing|n.|觀光
tour|n.|旅遊
guide|n./v.|導遊；指引
luxury|n.|奢華
complimentary|adj.|免費贈送的
construction|n.|建設
contractor|n.|承包商
blueprint|n.|藍圖
architect|n.|建築師
landlord|n.|房東
tenant|n.|房客
lease|n./v.|租約；出租
rent|n./v.|租金；租
property|n.|房產；財產
elevator|n.|電梯
lobby|n.|大廳
parking|n.|停車
entrance|n.|入口
exit|n./v.|出口；離開
stairs|n.|樓梯
corridor|n.|走廊
utility|n.|公用事業；水電
environment|n.|環境
recycle|v.|回收
energy|n.|能源
discuss|v.|討論
mention|v.|提及
suggest|v.|建議
recommend|v.|推薦
persuade|v.|說服
agree|v.|同意
object|v.|反對
clarify|v.|釐清
summarize|v.|摘要
emphasize|v.|強調
postpone|v.|延後
reschedule|v.|重新安排時間
adjourn|v.|休會
minutes|n.|會議記錄
participant|n.|參與者
chairperson|n.|主席
outline|n./v.|大綱；概述
issue|n./v.|議題；核發
decision|n.|決定
solution|n.|解決方案
complicated|adj.|複雜的
urgent|adj.|緊急的
complete|adj./v.|完整的；完成
outstanding|adj.|傑出的；未付的
considerable|adj.|相當大的
potential|adj.|潛在的
current|adj.|目前的
recent|adj.|最近的
competitive|adj.|有競爭力的
affordable|adj.|負擔得起的
accurate|adj.|準確的
detailed|adj.|詳細的
promptly|adv.|迅速地
carefully|adv.|仔細地
immediately|adv.|立刻
eventually|adv.|最終
mostly|adv.|大多
especially|adv.|尤其
regularly|adv.|定期地
temporarily|adv.|暫時地
achieve|v.|達成
ensure|v.|確保
obtain|v.|取得
prepare|v.|準備
prevent|v.|預防
perform|v.|執行；表演
manage|v.|管理；設法
operate|v.|操作；營運
develop|v.|開發；發展
organize|v.|籌劃；整理
arrange|v.|安排
remain|v.|保持；仍然
select|v.|挑選
compare|v.|比較
consider|v.|考慮
encourage|v.|鼓勵
recognize|v.|認可；認出
participate|v.|參加
depend|v.|依賴
involve|v.|涉及`;

// 追加文法題：依主題順序（時態、主詞動詞一致、詞性、介系詞、被動、代名詞、連接詞、關代、條件句、比較）
const MORE_G=[
[["We ___ the project last month.","finish|finished|will finish|finishing",1,"last month → 過去式"],
["The store ___ at 6 p.m. every day.","close|closes|closed|closing",1,"every day 表習慣；單數加 s"],
["By next Friday, I ___ the report.","finish|finished|will have finished|am finishing",2,"By + 未來時間 → 未來完成式"],
["They ___ dinner at the moment.","eat|are eating|ate|have eaten",1,"at the moment → 現在進行式"]],
[["Neither the manager nor the employees ___ ready.","is|are|was|be",1,"neither…nor 看靠近的主詞 employees → are"],
["The news ___ good for the company.","are|is|were|have been",1,"news 是不可數名詞 → is"],
["A number of staff members ___ absent today.","is|are|was|has",1,"a number of + 複數 → are"],
["The quality of the products ___ improved.","have|has|are|were",1,"主詞 quality 是單數 → has"]],
[["The ___ of the new system saved time.","install|installation|installed|installing",1,"The 後面接名詞 installation"],
["She is ___ for the budget.","responsible|responsibly|responsibility|respond",0,"be + 形容詞"],
["The project was completed ___.","success|successful|successfully|succeed",2,"修飾動詞 → 副詞"],
["We need to ___ the schedule.","revision|revise|revised|revising",1,"need to + 原形動詞"]],
[["The package arrived ___ time.","in|on|at|by",1,"on time = 準時"],
["He is interested ___ the position.","on|in|at|for",1,"be interested in"],
["We are looking forward ___ meeting you.","to|for|at|on",0,"look forward to + V-ing"],
["Payment can be made ___ credit card.","by|in|at|on",0,"by + 方式"]],
[["The meeting has been ___ until Monday.","postpone|postponed|postponing|postpones",1,"has been + 過去分詞"],
["Employees are ___ to wear ID badges.","require|required|requiring|requires",1,"are required to = 被要求"],
["The report ___ by the team last week.","wrote|was written|has written|is writing",1,"被寫 → was written"],
["Customers ___ of the delay by email.","notified|were notified|notify|have notify",1,"被通知 → were notified"]],
[["The manager asked ___ to submit the form.","we|us|our|ours",1,"asked 後面接受格 us"],
["This laptop is ___.","my|me|mine|I",2,"單獨使用 → mine"],
["Mr. Kim and ___ will attend.","me|my|I|myself",2,"做主詞 → I"],
["The employees can do it by ___.","them|themselves|their|they",1,"by oneself = 獨自"]],
[["___ she was sick, she came to work.","Despite|Even though|Because of|In spite",1,"後面是子句 → Even though"],
["Please call me ___ you arrive.","when|during|although|however",0,"時間子句用 when"],
["The event was canceled ___ the bad weather.","due to|because|so|although",0,"the bad weather 是名詞 → due to"],
["He studied hard, ___ he passed the exam.","so|because|although|despite",0,"表示結果 → so"]],
[["The employee ___ I met is new.","whom|which|whose|where",0,"先行詞是人、當受詞 → whom"],
["Products ___ are defective will be replaced.","who|that|whose|where",1,"先行詞是物、缺主詞 → that"],
["I know a man ___ brother works here.","who|whose|which|whom",1,"man 的 brother → whose"],
["The day ___ we met was sunny.","when|where|who|whose",0,"先行詞是時間 → when"]],
[["If you ___ any questions, please contact us.","have|will have|had|having",0,"if 子句用現在式"],
["If he had studied, he ___ passed.","will have|would have|would|had",1,"與過去事實相反 → would have + 過去分詞"],
["We will leave ___ it stops raining.","unless|if|as soon as|although",2,"as soon as = 一…就"],
["I would travel more if I ___ more money.","have|had|will have|having",1,"if + 過去式 → would + 原形"]],
[["This is the ___ expensive item in the store.","more|most|much|very",1,"the most + 形容詞"],
["Our prices are as low ___ theirs.","than|as|that|like",1,"as … as"],
["Sales were ___ higher than last year.","very|much|most|more",2,"much 可修飾比較級"],
["The ___ you practice, the better you become.","more|most|much|many",0,"the more …, the better …"]]
];
