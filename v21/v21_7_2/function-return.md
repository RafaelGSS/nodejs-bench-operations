## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,516,323|758162|
|Function returning explicitly undefined|1,522,824|761413|
|Function returning implicitly undefined|1,535,016|767509|
|Function returning string|1,428,915|714458|
|Function returning integer|1,532,207|766104|
|Function returning float|1,522,558|761280|
|Function returning functions|1,486,345|743173|
|Function returning arrow functions|1,502,914|751458|
|Function returning empty object|1,518,395|759198|
|Function returning empty array|1,487,704|743853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:35:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1516323.405604135,"samples":758162},{"name":"Function returning explicitly undefined","opsSec":1522824.8152421475,"samples":761413},{"name":"Function returning implicitly undefined","opsSec":1535016.0198316013,"samples":767509},{"name":"Function returning string","opsSec":1428915.5627468345,"samples":714458},{"name":"Function returning integer","opsSec":1532207.9632303186,"samples":766104},{"name":"Function returning float","opsSec":1522558.3647795506,"samples":761280},{"name":"Function returning functions","opsSec":1486345.515448408,"samples":743173},{"name":"Function returning arrow functions","opsSec":1502914.3347731635,"samples":751458},{"name":"Function returning empty object","opsSec":1518395.526262457,"samples":759198},{"name":"Function returning empty array","opsSec":1487704.3010420655,"samples":743853}]}-->
