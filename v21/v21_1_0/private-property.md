## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|472,881,447|94|
|Raw usage underscore usage|477,981,213|94|
|Manipulating private properties using #|473,545,256|96|
|Manipulating private properties using underscore(_)|474,352,282|97|
|Manipulating private properties using Symbol|473,327,538|98|
|Manipulating private properties using PrivateSymbol|40,231,893|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:22:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":472881447.2985066,"samples":8},{"name":"Raw usage underscore usage","opsSec":477981213.25002426,"samples":8},{"name":"Manipulating private properties using #","opsSec":473545255.644407,"samples":8},{"name":"Manipulating private properties using underscore(_)","opsSec":474352281.98570645,"samples":11},{"name":"Manipulating private properties using Symbol","opsSec":473327538.12156415,"samples":9},{"name":"Manipulating private properties using PrivateSymbol","opsSec":40231892.6226876,"samples":7}]}-->
