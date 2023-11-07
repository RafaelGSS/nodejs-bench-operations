## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,034,239|95|
|Function returning explicitly undefined|2,042,704|101|
|Function returning implicitly undefined|1,988,090|96|
|Function returning string|2,053,396|100|
|Function returning integer|1,973,147|96|
|Function returning float|2,049,471|98|
|Function returning functions|2,008,769|101|
|Function returning arrow functions|2,048,917|100|
|Function returning empty object|2,073,850|101|
|Function returning empty array|2,060,609|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:08:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":2034238.5175452505,"samples":5},{"name":"Function returning explicitly undefined","opsSec":2042703.7073176594,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1988089.8223754463,"samples":5},{"name":"Function returning string","opsSec":2053395.6172337288,"samples":6},{"name":"Function returning integer","opsSec":1973146.666357695,"samples":5},{"name":"Function returning float","opsSec":2049470.7626226817,"samples":7},{"name":"Function returning functions","opsSec":2008768.8324083604,"samples":5},{"name":"Function returning arrow functions","opsSec":2048917.0667069417,"samples":5},{"name":"Function returning empty object","opsSec":2073849.7301255034,"samples":8},{"name":"Function returning empty array","opsSec":2060609.406789918,"samples":6}]}-->
