## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,518,853|759427|
|Function returning explicitly undefined|1,460,991|730496|
|Function returning implicitly undefined|1,521,003|760502|
|Function returning string|1,468,817|734409|
|Function returning integer|1,523,067|761534|
|Function returning float|1,505,473|752737|
|Function returning functions|1,466,072|733037|
|Function returning arrow functions|1,487,425|743713|
|Function returning empty object|1,509,471|754736|
|Function returning empty array|1,502,224|751113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:31:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1518853.2041304207,"samples":759427},{"name":"Function returning explicitly undefined","opsSec":1460991.298403165,"samples":730496},{"name":"Function returning implicitly undefined","opsSec":1521003.911167029,"samples":760502},{"name":"Function returning string","opsSec":1468817.9291692642,"samples":734409},{"name":"Function returning integer","opsSec":1523067.7896512116,"samples":761534},{"name":"Function returning float","opsSec":1505473.5041861394,"samples":752737},{"name":"Function returning functions","opsSec":1466072.4163703104,"samples":733037},{"name":"Function returning arrow functions","opsSec":1487425.812537899,"samples":743713},{"name":"Function returning empty object","opsSec":1509471.7310638614,"samples":754736},{"name":"Function returning empty array","opsSec":1502224.4708658482,"samples":751113}]}-->
