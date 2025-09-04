## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|78,267,277|39133662|
|(short string) (true) String#slice and strict comparison|55,434,496|27717269|
|(long string) (true) String#startsWith|66,277,526|33138783|
|(long string) (true) String#slice and strict comparison|51,077,265|25541028|
|(short string) (false) String#startsWith|85,947,515|42976270|
|(short string) (false) String#slice and strict comparison|55,861,235|27935573|
|(long string) (false) String#startsWith|85,088,931|42544705|
|(long string) (false) String#slice and strict comparison|52,771,928|26387345|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:49:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":39133662,"opsSec":78267277.50923716},{"name":"(short string) (true) String#slice and strict comparison","samples":27717269,"opsSec":55434496.97847224},{"name":"(long string) (true) String#startsWith","samples":33138783,"opsSec":66277526.76370416},{"name":"(long string) (true) String#slice and strict comparison","samples":25541028,"opsSec":51077265.0546924},{"name":"(short string) (false) String#startsWith","samples":42976270,"opsSec":85947515.16447341},{"name":"(short string) (false) String#slice and strict comparison","samples":27935573,"opsSec":55861235.88158719},{"name":"(long string) (false) String#startsWith","samples":42544705,"opsSec":85088931.97038019},{"name":"(long string) (false) String#slice and strict comparison","samples":26387345,"opsSec":52771928.65606114}]}-->
