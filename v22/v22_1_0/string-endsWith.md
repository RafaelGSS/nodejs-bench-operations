## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,601,015|7800508|
|(short string) (true) String#slice and strict comparison|16,112,363|8056182|
|(long string) (true) String#endsWith|14,425,531|7212766|
|(long string) (true) String#slice and strict comparison|16,168,151|8084076|
|(short string) (false) String#endsWith|15,996,664|7998333|
|(short string) (false) String#slice and strict comparison|16,172,414|8086208|
|(long string) (false) String#endsWith|15,575,459|7787730|
|(long string) (false) String#slice and strict comparison|16,030,216|8015109|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:16:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15601015.18874258,"samples":7800508},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16112363.613321284,"samples":8056182},{"name":"(long string) (true) String#endsWith","opsSec":14425531.249886973,"samples":7212766},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16168151.579686679,"samples":8084076},{"name":"(short string) (false) String#endsWith","opsSec":15996664.464360194,"samples":7998333},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16172414.318119409,"samples":8086208},{"name":"(long string) (false) String#endsWith","opsSec":15575459.127796886,"samples":7787730},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16030216.813807176,"samples":8015109}]}-->
