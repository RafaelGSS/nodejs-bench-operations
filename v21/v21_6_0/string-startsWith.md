## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|277,807,240|93|
|(short string) (true) String#slice and strict comparison|820,458,990|95|
|(long string) (true) String#startsWith|172,541,299|95|
|(long string) (true) String#slice and strict comparison|820,271,064|96|
|(short string) (false) String#startsWith|782,424,833|99|
|(short string) (false) String#slice and strict comparison|820,975,349|98|
|(long string) (false) String#startsWith|782,554,516|97|
|(long string) (false) String#slice and strict comparison|816,612,542|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":277807240.2886386,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":820458990.0690944,"samples":8},{"name":"(long string) (true) String#startsWith","opsSec":172541299.059608,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":820271063.509117,"samples":7},{"name":"(short string) (false) String#startsWith","opsSec":782424833.1803375,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":820975348.7222812,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":782554516.3371937,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":816612541.5468215,"samples":6}]}-->
