## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,686,167|843084|
|Function returning explicitly undefined|1,663,075|831538|
|Function returning implicitly undefined|1,678,211|839106|
|Function returning string|1,650,010|825006|
|Function returning integer|1,683,978|841990|
|Function returning float|1,675,793|837897|
|Function returning functions|1,621,684|810843|
|Function returning arrow functions|1,660,762|830382|
|Function returning empty object|1,686,785|843393|
|Function returning empty array|1,670,145|835073|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1686167.025395334,"samples":843084},{"name":"Function returning explicitly undefined","opsSec":1663075.860301355,"samples":831538},{"name":"Function returning implicitly undefined","opsSec":1678211.4898228217,"samples":839106},{"name":"Function returning string","opsSec":1650010.429189852,"samples":825006},{"name":"Function returning integer","opsSec":1683978.6763941655,"samples":841990},{"name":"Function returning float","opsSec":1675793.560941975,"samples":837897},{"name":"Function returning functions","opsSec":1621684.7285996834,"samples":810843},{"name":"Function returning arrow functions","opsSec":1660762.6581004872,"samples":830382},{"name":"Function returning empty object","opsSec":1686785.4703467898,"samples":843393},{"name":"Function returning empty array","opsSec":1670145.438830973,"samples":835073}]}-->
