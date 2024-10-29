## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,924,883|962964|
|Function returning explicitly undefined|1,953,036|977695|
|Function returning implicitly undefined|1,972,461|987334|
|Function returning string|1,949,491|974823|
|Function returning integer|2,008,822|1004412|
|Function returning float|1,977,707|988854|
|Function returning functions|1,909,920|954961|
|Function returning arrow functions|2,000,805|1000446|
|Function returning empty object|1,965,833|982917|
|Function returning empty array|1,976,924|988529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:50:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1924883.15802276,"samples":962964},{"name":"Function returning explicitly undefined","opsSec":1953036.087631094,"samples":977695},{"name":"Function returning implicitly undefined","opsSec":1972461.013372138,"samples":987334},{"name":"Function returning string","opsSec":1949491.2220939132,"samples":974823},{"name":"Function returning integer","opsSec":2008822.5094536978,"samples":1004412},{"name":"Function returning float","opsSec":1977707.8022292196,"samples":988854},{"name":"Function returning functions","opsSec":1909920.0748005647,"samples":954961},{"name":"Function returning arrow functions","opsSec":2000805.8573046196,"samples":1000446},{"name":"Function returning empty object","opsSec":1965833.9921366638,"samples":982917},{"name":"Function returning empty array","opsSec":1976924.2294450903,"samples":988529}]}-->
