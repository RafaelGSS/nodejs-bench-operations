## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,690,024|27408949|
|(short string) (true) String#slice and strict comparison|64,759,513|32380653|
|(long string) (true) String#endsWith|50,987,326|25493680|
|(long string) (true) String#slice and strict comparison|58,694,304|29347292|
|(short string) (false) String#endsWith|59,345,189|29672904|
|(short string) (false) String#slice and strict comparison|63,871,397|31941115|
|(long string) (false) String#endsWith|55,309,907|27658685|
|(long string) (false) String#slice and strict comparison|58,643,525|29321769|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:56:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27408949,"opsSec":54690024.6282954},{"name":"(short string) (true) String#slice and strict comparison","samples":32380653,"opsSec":64759513.0681212},{"name":"(long string) (true) String#endsWith","samples":25493680,"opsSec":50987326.042440854},{"name":"(long string) (true) String#slice and strict comparison","samples":29347292,"opsSec":58694304.61511003},{"name":"(short string) (false) String#endsWith","samples":29672904,"opsSec":59345189.02967843},{"name":"(short string) (false) String#slice and strict comparison","samples":31941115,"opsSec":63871397.53872023},{"name":"(long string) (false) String#endsWith","samples":27658685,"opsSec":55309907.91908301},{"name":"(long string) (false) String#slice and strict comparison","samples":29321769,"opsSec":58643525.91943366}]}-->
