## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|87,730,096|43865052|
|(short string) (true) String#slice and strict comparison|55,764,540|27882292|
|(long string) (true) String#startsWith|66,683,414|33343097|
|(long string) (true) String#slice and strict comparison|51,773,795|25886903|
|(short string) (false) String#startsWith|93,944,397|46972209|
|(short string) (false) String#slice and strict comparison|56,659,081|28329543|
|(long string) (false) String#startsWith|84,132,230|42068543|
|(long string) (false) String#slice and strict comparison|50,614,650|25315153|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:19:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43865052,"opsSec":87730096.80613206},{"name":"(short string) (true) String#slice and strict comparison","samples":27882292,"opsSec":55764540.6151874},{"name":"(long string) (true) String#startsWith","samples":33343097,"opsSec":66683414.10183292},{"name":"(long string) (true) String#slice and strict comparison","samples":25886903,"opsSec":51773795.955883585},{"name":"(short string) (false) String#startsWith","samples":46972209,"opsSec":93944397.3322326},{"name":"(short string) (false) String#slice and strict comparison","samples":28329543,"opsSec":56659081.580591634},{"name":"(long string) (false) String#startsWith","samples":42068543,"opsSec":84132230.72896463},{"name":"(long string) (false) String#slice and strict comparison","samples":25315153,"opsSec":50614650.48368819}]}-->
