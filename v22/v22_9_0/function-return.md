## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,890,885|945636|
|Function returning explicitly undefined|1,812,860|906592|
|Function returning implicitly undefined|1,666,501|833566|
|Function returning string|1,866,519|933554|
|Function returning integer|1,709,571|855770|
|Function returning float|1,882,672|941588|
|Function returning functions|1,791,470|896309|
|Function returning arrow functions|1,725,640|863354|
|Function returning empty object|1,739,261|870698|
|Function returning empty array|1,711,886|855945|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:23:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1890885.3857922503,"samples":945636},{"name":"Function returning explicitly undefined","opsSec":1812860.6907986815,"samples":906592},{"name":"Function returning implicitly undefined","opsSec":1666501.4091987705,"samples":833566},{"name":"Function returning string","opsSec":1866519.1244153616,"samples":933554},{"name":"Function returning integer","opsSec":1709571.2030962359,"samples":855770},{"name":"Function returning float","opsSec":1882672.7879212077,"samples":941588},{"name":"Function returning functions","opsSec":1791470.6991689554,"samples":896309},{"name":"Function returning arrow functions","opsSec":1725640.811952664,"samples":863354},{"name":"Function returning empty object","opsSec":1739261.1647544564,"samples":870698},{"name":"Function returning empty array","opsSec":1711886.4255811435,"samples":855945}]}-->
