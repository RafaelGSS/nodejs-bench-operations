## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|181,571|54|
|[True conditional] Using constructor name|144,696|89|
|[True conditional] Check if property is valid then instanceof |145,871|86|
|[False conditional] Using instanceof only|926,554,860|91|
|[False conditional] Using constructor name|928,484,192|87|
|[False conditional] Check if property is valid then instanceof |929,782,069|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":181570.6355027842,"cycles":4,"stats":{"deviation":9.970436999091109e-7,"mean":0.000005507498485263968,"moe":2.659337055236975e-7,"rme":4.828575191354802,"sem":1.3568046200188646e-7,"variance":9.940961395284494e-13}},{"name":"[True conditional] Using constructor name","hz":144695.9293508501,"cycles":3,"stats":{"deviation":5.04726070604311e-7,"mean":0.000006911044453609052,"moe":1.0486167870560399e-7,"rme":1.517305805359762,"sem":5.350085648245101e-8,"variance":2.5474840634766794e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":145871.4238795958,"cycles":3,"stats":{"deviation":5.214429174069876e-7,"mean":0.000006855352291792347,"moe":1.1020812626852245e-7,"rme":1.6076216301891655,"sem":5.6228635851286965e-8,"variance":2.7190271611391053e-13}},{"name":"[False conditional] Using instanceof only","hz":926554860.205572,"cycles":6,"stats":{"deviation":7.844767619262256e-11,"mean":1.0792669090075605e-9,"moe":1.611815984804426e-11,"rme":1.4934359344775714,"sem":8.223550942879726e-12,"variance":6.15403790002256e-21}},{"name":"[False conditional] Using constructor name","hz":928484192.4855858,"cycles":7,"stats":{"deviation":6.594742229409788e-11,"mean":1.0770242596408279e-9,"moe":1.385779938402178e-11,"rme":1.286674767070071,"sem":7.070305808174377e-12,"variance":4.349062507236078e-21}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":929782068.6968117,"cycles":5,"stats":{"deviation":8.583466675723352e-11,"mean":1.075520849097043e-9,"moe":1.7832974699569103e-11,"rme":1.6580780107183266,"sem":9.098456479371992e-12,"variance":7.367590017325328e-21}}]}-->
