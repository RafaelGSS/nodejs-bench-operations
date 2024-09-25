## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,489,385|7244693|
|(short string) (true) String#slice and strict comparison|13,341,251|6670626|
|(long string) (true) String#endsWith|14,302,476|7151239|
|(long string) (true) String#slice and strict comparison|13,273,101|6636551|
|(short string) (false) String#endsWith|14,936,108|7468055|
|(short string) (false) String#slice and strict comparison|13,195,745|6597873|
|(long string) (false) String#endsWith|14,096,500|7048251|
|(long string) (false) String#slice and strict comparison|13,096,026|6548014|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:48:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14489385.188688615,"samples":7244693},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13341251.439616773,"samples":6670626},{"name":"(long string) (true) String#endsWith","opsSec":14302476.91310463,"samples":7151239},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13273101.362788359,"samples":6636551},{"name":"(short string) (false) String#endsWith","opsSec":14936108.655737378,"samples":7468055},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13195745.31381141,"samples":6597873},{"name":"(long string) (false) String#endsWith","opsSec":14096500.336442959,"samples":7048251},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13096026.690512376,"samples":6548014}]}-->
