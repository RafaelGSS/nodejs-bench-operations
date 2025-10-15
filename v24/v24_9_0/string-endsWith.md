## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|81,513,886|40756945|
|(short string) (true) String#slice and strict comparison|56,440,801|28223929|
|(long string) (true) String#endsWith|67,652,961|33829303|
|(long string) (true) String#slice and strict comparison|51,395,418|25703665|
|(short string) (false) String#endsWith|88,438,401|44219212|
|(short string) (false) String#slice and strict comparison|57,707,460|28853735|
|(long string) (false) String#endsWith|82,542,140|41271090|
|(long string) (false) String#slice and strict comparison|52,645,881|26322947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:58:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":40756945,"opsSec":81513886.413389},{"name":"(short string) (true) String#slice and strict comparison","samples":28223929,"opsSec":56440801.883830085},{"name":"(long string) (true) String#endsWith","samples":33829303,"opsSec":67652961.30752034},{"name":"(long string) (true) String#slice and strict comparison","samples":25703665,"opsSec":51395418.80331982},{"name":"(short string) (false) String#endsWith","samples":44219212,"opsSec":88438401.35976924},{"name":"(short string) (false) String#slice and strict comparison","samples":28853735,"opsSec":57707460.30514667},{"name":"(long string) (false) String#endsWith","samples":41271090,"opsSec":82542140.54485682},{"name":"(long string) (false) String#slice and strict comparison","samples":26322947,"opsSec":52645881.25969673}]}-->
