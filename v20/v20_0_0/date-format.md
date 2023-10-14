## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,492|83|
|Intl.DateTimeFormat().format(new Date())|5,680|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,658|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|6,487|88|
|Reusing Intl.DateTimeFormat()|325,374|68|
|Date.toLocaleDateString()|426,143|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,351|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":5491.548669529635,"cycles":3,"stats":{"deviation":0.000013328427468036271,"mean":0.00018209799460552765,"moe":0.000002867450556596316,"rme":1.574674428901851,"sem":0.0000014629849778552634,"variance":1.7764697877070375e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":5680.453823196587,"cycles":3,"stats":{"deviation":0.00003629417546582029,"mean":0.00017604227252344173,"moe":0.000008106766110095772,"rme":4.605011054385405,"sem":0.000004136105158212129,"variance":1.3172671727437514e-9}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":5658.473788017265,"cycles":4,"stats":{"deviation":0.000011757825841562686,"mean":0.0001767260992032272,"moe":0.0000025144525899298805,"rme":1.4227964071330355,"sem":0.0000012828839744540206,"variance":1.382464685205193e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":6487.372083117699,"cycles":3,"stats":{"deviation":0.00000819647748339116,"mean":0.00015414562124505435,"moe":0.0000017125449736305937,"rme":1.110991645301465,"sem":8.737474355258131e-7,"variance":6.718224313573829e-11}},{"name":"Reusing Intl.DateTimeFormat()","hz":325374.44457744365,"cycles":4,"stats":{"deviation":0.000004084670567027707,"mean":0.0000030733821191725035,"moe":9.70864566460746e-7,"rme":31.58945190720858,"sem":4.953390645207888e-7,"variance":1.668453364114245e-11}},{"name":"Date.toLocaleDateString()","hz":426142.84885536355,"cycles":3,"stats":{"deviation":1.39751149403355e-7,"mean":0.0000023466309541179425,"moe":2.936647597053195e-8,"rme":1.2514313730925064,"sem":1.498289590333263e-8,"variance":1.953038375955885e-14}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":6350.586786707699,"cycles":3,"stats":{"deviation":0.00006338667959762295,"mean":0.00015746576396579327,"moe":0.000013719780011134369,"rme":8.712865365524634,"sem":0.0000069998877607828416,"variance":4.0178711504117096e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
