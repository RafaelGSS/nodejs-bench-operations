## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|88,021,397|44011450|
|(short string) (true) String#slice and strict comparison|60,290,759|30205347|
|(long string) (true) String#startsWith|60,771,146|30385594|
|(long string) (true) String#slice and strict comparison|54,882,683|27442109|
|(short string) (false) String#startsWith|92,867,679|46447121|
|(short string) (false) String#slice and strict comparison|60,387,198|30201109|
|(long string) (false) String#startsWith|85,955,238|42977648|
|(long string) (false) String#slice and strict comparison|54,341,358|27173225|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:22:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44011450,"opsSec":88021397.12266552},{"name":"(short string) (true) String#slice and strict comparison","samples":30205347,"opsSec":60290759.76207265},{"name":"(long string) (true) String#startsWith","samples":30385594,"opsSec":60771146.06790921},{"name":"(long string) (true) String#slice and strict comparison","samples":27442109,"opsSec":54882683.37040759},{"name":"(short string) (false) String#startsWith","samples":46447121,"opsSec":92867679.98617035},{"name":"(short string) (false) String#slice and strict comparison","samples":30201109,"opsSec":60387198.97896754},{"name":"(long string) (false) String#startsWith","samples":42977648,"opsSec":85955238.58190063},{"name":"(long string) (false) String#slice and strict comparison","samples":27173225,"opsSec":54341358.10606275}]}-->
