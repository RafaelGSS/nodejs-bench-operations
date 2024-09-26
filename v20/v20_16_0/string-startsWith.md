## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|16,322,500|8161251|
|(short string) (true) String#slice and strict comparison|14,493,147|7246574|
|(long string) (true) String#startsWith|15,871,829|7935915|
|(long string) (true) String#slice and strict comparison|13,498,622|6749312|
|(short string) (false) String#startsWith|17,476,093|8738047|
|(short string) (false) String#slice and strict comparison|14,162,871|7081436|
|(long string) (false) String#startsWith|17,279,096|8639549|
|(long string) (false) String#slice and strict comparison|13,523,173|6761587|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":16322500.563721718,"samples":8161251},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14493147.246294927,"samples":7246574},{"name":"(long string) (true) String#startsWith","opsSec":15871829.587385874,"samples":7935915},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13498622.3263555,"samples":6749312},{"name":"(short string) (false) String#startsWith","opsSec":17476093.929715406,"samples":8738047},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14162871.150248466,"samples":7081436},{"name":"(long string) (false) String#startsWith","opsSec":17279096.929162055,"samples":8639549},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13523173.431415496,"samples":6761587}]}-->
