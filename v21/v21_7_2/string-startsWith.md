## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,979,930|6989966|
|(short string) (true) String#slice and strict comparison|12,309,121|6154561|
|(long string) (true) String#startsWith|12,987,376|6493689|
|(long string) (true) String#slice and strict comparison|11,938,543|5969272|
|(short string) (false) String#startsWith|14,124,171|7062086|
|(short string) (false) String#slice and strict comparison|12,148,129|6074065|
|(long string) (false) String#startsWith|13,940,104|6970053|
|(long string) (false) String#slice and strict comparison|11,664,499|5832250|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:10:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13979930.685753837,"samples":6989966},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12309121.876891812,"samples":6154561},{"name":"(long string) (true) String#startsWith","opsSec":12987376.67548595,"samples":6493689},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11938543.737115331,"samples":5969272},{"name":"(short string) (false) String#startsWith","opsSec":14124171.519707507,"samples":7062086},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12148129.441438295,"samples":6074065},{"name":"(long string) (false) String#startsWith","opsSec":13940104.633835,"samples":6970053},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11664499.859857911,"samples":5832250}]}-->
