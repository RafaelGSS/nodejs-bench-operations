## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|310,333,228|97|
|(short string) (true) String#slice and strict comparison|909,529,671|99|
|(long string) (true) String#startsWith|195,062,637|98|
|(long string) (true) String#slice and strict comparison|908,702,536|96|
|(short string) (false) String#startsWith|870,515,459|100|
|(short string) (false) String#slice and strict comparison|909,294,226|99|
|(long string) (false) String#startsWith|868,876,910|98|
|(long string) (false) String#slice and strict comparison|909,969,990|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:51:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":310333227.73421556,"samples":9},{"name":"(short string) (true) String#slice and strict comparison","opsSec":909529670.5500989,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":195062636.87915564,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":908702535.9722116,"samples":7},{"name":"(short string) (false) String#startsWith","opsSec":870515458.9880201,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":909294225.7725935,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":868876910.4887232,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":909969989.6880636,"samples":6}]}-->
