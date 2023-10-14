## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|38,406,822|84|
|Object.create({})|767,640|63|
|Cached Empty.prototype|661,523,887|89|
|Empty.prototype|871,263|68|
|Empty class|614,109|72|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Object.create(null)","hz":38406821.90711072,"cycles":5,"stats":{"deviation":2.2646552809932723e-9,"mean":2.6037041086569513e-8,"moe":4.843045315795474e-10,"rme":1.8600597893182358,"sem":2.470941487650752e-10,"variance":5.128663541730717e-18}},{"name":"Object.create({})","hz":767640.4903061095,"cycles":4,"stats":{"deviation":2.3410837057851065e-7,"mean":0.0000013026931390776863,"moe":5.780996931633369e-8,"rme":4.437727319057154,"sem":2.9494882304251885e-8,"variance":5.480672917492527e-14}},{"name":"Cached Empty.prototype","hz":661523887.1377531,"cycles":6,"stats":{"deviation":7.482792705667014e-11,"mean":1.511661210491956e-9,"moe":1.5546219032886816e-11,"rme":1.0284195244930208,"sem":7.93174440453409e-12,"variance":5.599218667598347e-21}},{"name":"Empty.prototype","hz":871262.7150294174,"cycles":3,"stats":{"deviation":1.517561929727367e-7,"mean":0.0000011477594332339079,"moe":3.6070157453461515e-8,"rme":3.142658331444146,"sem":1.8403141557888528e-8,"variance":2.3029942105578495e-14}},{"name":"Empty class","hz":614109.4851681658,"cycles":3,"stats":{"deviation":2.0246250724177752e-7,"mean":0.000001628374132221982,"moe":4.676645319018585e-8,"rme":2.8719722491766153,"sem":2.386043530111523e-8,"variance":4.099106683862682e-14}}]}-->
