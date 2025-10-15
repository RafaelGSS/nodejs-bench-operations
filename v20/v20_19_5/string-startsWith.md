## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|72,926,698|36566208|
|(short string) (true) String#slice and strict comparison|56,375,667|28187837|
|(long string) (true) String#startsWith|55,564,701|27782354|
|(long string) (true) String#slice and strict comparison|49,876,041|24938025|
|(short string) (false) String#startsWith|99,139,732|49573931|
|(short string) (false) String#slice and strict comparison|56,725,188|28384861|
|(long string) (false) String#startsWith|87,000,986|43507642|
|(long string) (false) String#slice and strict comparison|50,155,444|25077729|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:04:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":36566208,"opsSec":72926698.53463762},{"name":"(short string) (true) String#slice and strict comparison","samples":28187837,"opsSec":56375667.12216861},{"name":"(long string) (true) String#startsWith","samples":27782354,"opsSec":55564701.10997706},{"name":"(long string) (true) String#slice and strict comparison","samples":24938025,"opsSec":49876041.12206468},{"name":"(short string) (false) String#startsWith","samples":49573931,"opsSec":99139732.54193157},{"name":"(short string) (false) String#slice and strict comparison","samples":28384861,"opsSec":56725188.982786044},{"name":"(long string) (false) String#startsWith","samples":43507642,"opsSec":87000986.95381191},{"name":"(long string) (false) String#slice and strict comparison","samples":25077729,"opsSec":50155444.45803}]}-->
