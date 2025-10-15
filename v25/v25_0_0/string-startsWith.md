## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|83,558,457|41780749|
|(short string) (true) String#slice and strict comparison|53,728,196|26864804|
|(long string) (true) String#startsWith|66,573,515|33289299|
|(long string) (true) String#slice and strict comparison|51,521,975|25765101|
|(short string) (false) String#startsWith|83,478,212|41739126|
|(short string) (false) String#slice and strict comparison|55,399,580|27700752|
|(long string) (false) String#startsWith|88,083,460|44041736|
|(long string) (false) String#slice and strict comparison|50,568,521|25284261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:06:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":41780749,"opsSec":83558457.97618191},{"name":"(short string) (true) String#slice and strict comparison","samples":26864804,"opsSec":53728196.34536922},{"name":"(long string) (true) String#startsWith","samples":33289299,"opsSec":66573515.378394924},{"name":"(long string) (true) String#slice and strict comparison","samples":25765101,"opsSec":51521975.07406413},{"name":"(short string) (false) String#startsWith","samples":41739126,"opsSec":83478212.26437095},{"name":"(short string) (false) String#slice and strict comparison","samples":27700752,"opsSec":55399580.63735943},{"name":"(long string) (false) String#startsWith","samples":44041736,"opsSec":88083460.19681634},{"name":"(long string) (false) String#slice and strict comparison","samples":25284261,"opsSec":50568521.19090366}]}-->
