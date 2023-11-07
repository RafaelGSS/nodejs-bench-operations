## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|850,065,825|98|
|Raw usage underscore usage|851,372,074|101|
|Manipulating private properties using #|842,418,754|90|
|Manipulating private properties using underscore(_)|844,072,659|96|
|Manipulating private properties using Symbol|845,190,865|93|
|Manipulating private properties using PrivateSymbol|57,089,606|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":850065825.2055167,"samples":6},{"name":"Raw usage underscore usage","opsSec":851372073.9645174,"samples":8},{"name":"Manipulating private properties using #","opsSec":842418753.7769058,"samples":6},{"name":"Manipulating private properties using underscore(_)","opsSec":844072659.2626686,"samples":7},{"name":"Manipulating private properties using Symbol","opsSec":845190865.0943112,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":57089605.76155635,"samples":7}]}-->
