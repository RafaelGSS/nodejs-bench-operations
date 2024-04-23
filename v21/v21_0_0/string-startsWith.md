## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|271,489,544|94|
|(short string) (true) String#slice and strict comparison|820,215,355|97|
|(long string) (true) String#startsWith|173,333,729|93|
|(long string) (true) String#slice and strict comparison|819,279,147|97|
|(short string) (false) String#startsWith|777,733,254|98|
|(short string) (false) String#slice and strict comparison|818,902,826|97|
|(long string) (false) String#startsWith|780,973,659|99|
|(long string) (false) String#slice and strict comparison|819,926,660|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":271489543.5352711,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":820215354.979252,"samples":8},{"name":"(long string) (true) String#startsWith","opsSec":173333728.72526354,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":819279146.9958984,"samples":7},{"name":"(short string) (false) String#startsWith","opsSec":777733254.4621341,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":818902825.5953854,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":780973658.7574512,"samples":9},{"name":"(long string) (false) String#slice and strict comparison","opsSec":819926660.2108792,"samples":6}]}-->
