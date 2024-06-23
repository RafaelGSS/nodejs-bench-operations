## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,563,611|781806|
|Function returning explicitly undefined|1,528,509|764255|
|Function returning implicitly undefined|1,567,766|783884|
|Function returning string|1,497,692|748847|
|Function returning integer|1,567,759|783880|
|Function returning float|1,510,473|755237|
|Function returning functions|1,508,694|754348|
|Function returning arrow functions|1,450,787|725394|
|Function returning empty object|1,544,395|772198|
|Function returning empty array|1,538,190|769096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:30:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1563611.7493920843,"samples":781806},{"name":"Function returning explicitly undefined","opsSec":1528509.376648133,"samples":764255},{"name":"Function returning implicitly undefined","opsSec":1567766.1285409497,"samples":783884},{"name":"Function returning string","opsSec":1497692.7330169235,"samples":748847},{"name":"Function returning integer","opsSec":1567759.7117767716,"samples":783880},{"name":"Function returning float","opsSec":1510473.8822320793,"samples":755237},{"name":"Function returning functions","opsSec":1508694.96474987,"samples":754348},{"name":"Function returning arrow functions","opsSec":1450787.4745724571,"samples":725394},{"name":"Function returning empty object","opsSec":1544395.7522748774,"samples":772198},{"name":"Function returning empty array","opsSec":1538190.8306895846,"samples":769096}]}-->
