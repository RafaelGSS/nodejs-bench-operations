## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|149,155|60|
|[True conditional] Using constructor name|127,455|91|
|[True conditional] Check if property is valid then instanceof |129,416|91|
|[False conditional] Using instanceof only|604,598,586|92|
|[False conditional] Using constructor name|603,549,881|93|
|[False conditional] Check if property is valid then instanceof |597,692,789|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":149154.6028091727,"cycles":4,"stats":{"deviation":9.970012905652452e-7,"mean":0.000006704452837297905,"moe":2.522761337744244e-7,"rme":3.7628146531357993,"sem":1.2871231315021655e-7,"variance":9.940115733887645e-13}},{"name":"[True conditional] Using constructor name","hz":127454.85792142023,"cycles":3,"stats":{"deviation":4.432850450682847e-7,"mean":0.000007845915144454754,"moe":9.107904225377231e-8,"rme":1.160846639007358,"sem":4.6468899109067504e-8,"variance":1.9650163118119121e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":129415.84273489178,"cycles":3,"stats":{"deviation":4.1982511417472694e-7,"mean":0.000007727029232800338,"moe":8.625887504782522e-8,"rme":1.116326500767803,"sem":4.4009630126441435e-8,"variance":1.7625312649182252e-13}},{"name":"[False conditional] Using instanceof only","hz":604598585.5771822,"cycles":7,"stats":{"deviation":4.346287050681252e-11,"mean":1.653989975919885e-9,"moe":8.8813822774272e-12,"rme":0.5369671162902737,"sem":4.531317488483265e-12,"variance":1.889021112691954e-21}},{"name":"[False conditional] Using constructor name","hz":603549880.7890085,"cycles":6,"stats":{"deviation":3.0552094354001954e-11,"mean":1.65686388454376e-9,"moe":6.209485019517452e-12,"rme":0.37477339432908924,"sem":3.1681046017946185e-12,"variance":9.334304694158381e-22}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":597692789.0422837,"cycles":6,"stats":{"deviation":5.601695869209875e-11,"mean":1.6731003256745919e-9,"moe":1.1509458765656216e-11,"rme":0.6879120510012223,"sem":5.872172839620518e-12,"variance":3.1378996611122976e-21}}]}-->
