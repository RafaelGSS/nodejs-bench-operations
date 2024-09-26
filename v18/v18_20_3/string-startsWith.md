## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,892,074|6946038|
|(short string) (true) String#slice and strict comparison|12,263,112|6131560|
|(long string) (true) String#startsWith|12,771,889|6385945|
|(long string) (true) String#slice and strict comparison|11,605,111|5802556|
|(short string) (false) String#startsWith|14,539,218|7269610|
|(short string) (false) String#slice and strict comparison|12,413,866|6206934|
|(long string) (false) String#startsWith|13,947,271|6973636|
|(long string) (false) String#slice and strict comparison|11,964,876|5982439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:04:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13892074.796869239,"samples":6946038},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12263112.689792937,"samples":6131560},{"name":"(long string) (true) String#startsWith","opsSec":12771889.430193946,"samples":6385945},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11605111.795251304,"samples":5802556},{"name":"(short string) (false) String#startsWith","opsSec":14539218.37749889,"samples":7269610},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12413866.81547397,"samples":6206934},{"name":"(long string) (false) String#startsWith","opsSec":13947271.17688716,"samples":6973636},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11964876.903780496,"samples":5982439}]}-->
