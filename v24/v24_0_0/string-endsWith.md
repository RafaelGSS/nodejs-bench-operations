## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|82,711,852|41368534|
|(short string) (true) String#slice and strict comparison|54,993,243|27496630|
|(long string) (true) String#endsWith|67,339,471|33681181|
|(long string) (true) String#slice and strict comparison|50,422,571|25211385|
|(short string) (false) String#endsWith|91,991,717|46010730|
|(short string) (false) String#slice and strict comparison|57,064,808|28545480|
|(long string) (false) String#endsWith|86,293,450|43232554|
|(long string) (false) String#slice and strict comparison|50,641,052|25324454|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:36:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":41368534,"opsSec":82711852.13391104},{"name":"(short string) (true) String#slice and strict comparison","samples":27496630,"opsSec":54993243.831986316},{"name":"(long string) (true) String#endsWith","samples":33681181,"opsSec":67339471.83205591},{"name":"(long string) (true) String#slice and strict comparison","samples":25211385,"opsSec":50422571.94013742},{"name":"(short string) (false) String#endsWith","samples":46010730,"opsSec":91991717.9736785},{"name":"(short string) (false) String#slice and strict comparison","samples":28545480,"opsSec":57064808.22555677},{"name":"(long string) (false) String#endsWith","samples":43232554,"opsSec":86293450.3072584},{"name":"(long string) (false) String#slice and strict comparison","samples":25324454,"opsSec":50641052.458660506}]}-->
