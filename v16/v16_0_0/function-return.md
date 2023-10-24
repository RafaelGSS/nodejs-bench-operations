## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,295,358|94|
|Function returning explicitly undefined|1,283,309|96|
|Function returning implicitly undefined|1,306,118|88|
|Function returning string|1,295,888|92|
|Function returning integer|1,330,354|98|
|Function returning float|1,313,096|99|
|Function returning functions|1,263,742|96|
|Function returning arrow functions|1,294,076|94|
|Function returning empty object|1,310,648|97|
|Function returning empty array|1,305,093|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:24:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Function returning null","opsSec":1295357.5982621468,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1283308.7470868772,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1306118.055527547,"samples":6},{"name":"Function returning string","opsSec":1295887.7998964335,"samples":7},{"name":"Function returning integer","opsSec":1330354.0449128817,"samples":6},{"name":"Function returning float","opsSec":1313096.3163652516,"samples":6},{"name":"Function returning functions","opsSec":1263741.7982533835,"samples":6},{"name":"Function returning arrow functions","opsSec":1294075.9515865142,"samples":6},{"name":"Function returning empty object","opsSec":1310648.1202543615,"samples":7},{"name":"Function returning empty array","opsSec":1305092.6116368575,"samples":6}]}-->
