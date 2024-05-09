## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,558,763|779382|
|Function returning explicitly undefined|1,539,769|769885|
|Function returning implicitly undefined|1,594,161|797081|
|Function returning string|1,546,637|773319|
|Function returning integer|1,594,011|797006|
|Function returning float|1,567,646|783824|
|Function returning functions|1,555,775|777888|
|Function returning arrow functions|1,568,179|784090|
|Function returning empty object|1,596,511|798256|
|Function returning empty array|1,621,901|810951|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:33:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1558763.791125692,"samples":779382},{"name":"Function returning explicitly undefined","opsSec":1539769.5996598161,"samples":769885},{"name":"Function returning implicitly undefined","opsSec":1594161.3591473848,"samples":797081},{"name":"Function returning string","opsSec":1546637.4463055,"samples":773319},{"name":"Function returning integer","opsSec":1594011.3368922046,"samples":797006},{"name":"Function returning float","opsSec":1567646.4480293626,"samples":783824},{"name":"Function returning functions","opsSec":1555775.5519368828,"samples":777888},{"name":"Function returning arrow functions","opsSec":1568179.1061379265,"samples":784090},{"name":"Function returning empty object","opsSec":1596511.744556106,"samples":798256},{"name":"Function returning empty array","opsSec":1621901.704814952,"samples":810951}]}-->
