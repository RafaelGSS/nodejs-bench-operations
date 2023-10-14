## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,371,517|86|
|Object.create({})|1,620,076|71|
|Cached Empty.prototype|983,853,682|93|
|Empty.prototype|1,573,765|73|
|Empty class|1,044,649|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","hz":46371516.74596679,"cycles":6,"stats":{"deviation":3.0100474066662245e-9,"mean":2.1564962075280317e-8,"moe":6.361802482958885e-10,"rme":2.9500643037306102,"sem":3.2458175933463697e-10,"variance":9.060385390378063e-18}},{"name":"Object.create({})","hz":1620075.9608723358,"cycles":4,"stats":{"deviation":9.302120149550844e-8,"mean":6.172550078834244e-7,"moe":2.1637587728572712e-8,"rme":3.50545357303269,"sem":1.1039585575802405e-8,"variance":8.652943927667982e-15}},{"name":"Cached Empty.prototype","hz":983853682.4054035,"cycles":7,"stats":{"deviation":3.514499179188684e-11,"mean":1.0164112996509e-9,"moe":7.1429571247772526e-12,"rme":0.7027624670476013,"sem":3.644365879988394e-12,"variance":1.2351704480517931e-21}},{"name":"Empty.prototype","hz":1573765.146303212,"cycles":3,"stats":{"deviation":5.647651738157547e-8,"mean":6.354188249428504e-7,"moe":1.2955749712604332e-8,"rme":2.0389307341924554,"sem":6.610076383981802e-9,"variance":3.1895970155513966e-15}},{"name":"Empty class","hz":1044648.7852363931,"cycles":4,"stats":{"deviation":1.5067966341961133e-7,"mean":9.572595250505274e-7,"moe":3.365622095592453e-8,"rme":3.5158930337254195,"sem":1.7171541304043127e-8,"variance":2.270436096824736e-14}}]}-->
