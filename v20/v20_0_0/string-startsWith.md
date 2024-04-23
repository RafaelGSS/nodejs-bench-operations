## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|277,849,189|94|
|(short string) (true) String#slice and String#indexOf|822,153,061|95|
|(short string) (true) String#slice and strict comparison|821,965,136|97|
|(long string) (true) String#startsWith|175,562,867|95|
|(long string) (true) String#slice and strict comparison|818,719,323|97|
|(short string) (false) String#startsWith|857,529,576|94|
|(short string) (false) String#slice and strict comparison|822,729,200|99|
|(long string) (false) String#startsWith|857,129,939|98|
|(long string) (false) String#slice and strict comparison|822,671,631|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:54:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":277849188.56843656,"samples":5},{"name":"(short string) (true) String#slice and String#indexOf","opsSec":822153060.963271,"samples":9},{"name":"(short string) (true) String#slice and strict comparison","opsSec":821965136.0638763,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":175562867.48154357,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":818719323.2334722,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":857529575.862612,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":822729200.0739644,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":857129938.6076405,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":822671630.8047836,"samples":6}]}-->
