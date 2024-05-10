## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,437,305|7218653|
|(short string) (true) String#slice and strict comparison|15,358,476|7679239|
|(long string) (true) String#endsWith|13,787,381|6893691|
|(long string) (true) String#slice and strict comparison|15,271,773|7635887|
|(short string) (false) String#endsWith|15,095,218|7547610|
|(short string) (false) String#slice and strict comparison|15,324,887|7662444|
|(long string) (false) String#endsWith|14,845,467|7422734|
|(long string) (false) String#slice and strict comparison|15,392,559|7696280|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:13:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14437305.451382797,"samples":7218653},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15358476.77135318,"samples":7679239},{"name":"(long string) (true) String#endsWith","opsSec":13787381.696646303,"samples":6893691},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15271773.847271431,"samples":7635887},{"name":"(short string) (false) String#endsWith","opsSec":15095218.490548536,"samples":7547610},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15324887.693631152,"samples":7662444},{"name":"(long string) (false) String#endsWith","opsSec":14845467.198395915,"samples":7422734},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15392559.969274003,"samples":7696280}]}-->
