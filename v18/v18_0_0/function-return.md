## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,826,501|98|
|Function returning explicitly undefined|1,819,348|94|
|Function returning implicitly undefined|1,851,070|96|
|Function returning string|1,838,496|97|
|Function returning integer|1,856,963|98|
|Function returning float|1,832,574|94|
|Function returning functions|1,814,705|97|
|Function returning arrow functions|1,758,195|95|
|Function returning empty object|1,836,932|98|
|Function returning empty array|1,830,927|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:51:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Function returning null","opsSec":1826500.8358289502,"samples":6},{"name":"Function returning explicitly undefined","opsSec":1819347.8491265227,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1851070.2187333314,"samples":6},{"name":"Function returning string","opsSec":1838495.55181576,"samples":6},{"name":"Function returning integer","opsSec":1856962.6726987318,"samples":6},{"name":"Function returning float","opsSec":1832574.0779063068,"samples":6},{"name":"Function returning functions","opsSec":1814704.828615302,"samples":5},{"name":"Function returning arrow functions","opsSec":1758195.4529079183,"samples":8},{"name":"Function returning empty object","opsSec":1836932.1208296998,"samples":7},{"name":"Function returning empty array","opsSec":1830927.266269937,"samples":5}]}-->
