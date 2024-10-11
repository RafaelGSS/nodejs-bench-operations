## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,833,021|917839|
|Function returning explicitly undefined|1,827,019|913580|
|Function returning implicitly undefined|1,606,006|803004|
|Function returning string|1,598,840|799432|
|Function returning integer|1,612,607|806405|
|Function returning float|1,600,448|800225|
|Function returning functions|1,693,164|846584|
|Function returning arrow functions|1,644,585|822701|
|Function returning empty object|1,866,582|933571|
|Function returning empty array|1,893,358|947401|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:14:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1833021.0982408174,"samples":917839},{"name":"Function returning explicitly undefined","opsSec":1827019.3560499712,"samples":913580},{"name":"Function returning implicitly undefined","opsSec":1606006.0920647627,"samples":803004},{"name":"Function returning string","opsSec":1598840.3403606433,"samples":799432},{"name":"Function returning integer","opsSec":1612607.3726584108,"samples":806405},{"name":"Function returning float","opsSec":1600448.8572795158,"samples":800225},{"name":"Function returning functions","opsSec":1693164.5798075488,"samples":846584},{"name":"Function returning arrow functions","opsSec":1644585.3285283886,"samples":822701},{"name":"Function returning empty object","opsSec":1866582.3612764422,"samples":933571},{"name":"Function returning empty array","opsSec":1893358.359691336,"samples":947401}]}-->
