## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,792,692|26423989|
|(short string) (true) String#slice and strict comparison|51,492,480|25747602|
|(long string) (true) String#endsWith|49,184,454|24601803|
|(long string) (true) String#slice and strict comparison|45,143,958|22571985|
|(short string) (false) String#endsWith|55,181,070|27839759|
|(short string) (false) String#slice and strict comparison|60,640,436|30321044|
|(long string) (false) String#endsWith|53,469,506|26738100|
|(long string) (false) String#slice and strict comparison|52,912,233|26462276|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:36:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26423989,"opsSec":52792692.964001164},{"name":"(short string) (true) String#slice and strict comparison","samples":25747602,"opsSec":51492480.871641584},{"name":"(long string) (true) String#endsWith","samples":24601803,"opsSec":49184454.95040704},{"name":"(long string) (true) String#slice and strict comparison","samples":22571985,"opsSec":45143958.08199506},{"name":"(short string) (false) String#endsWith","samples":27839759,"opsSec":55181070.042993},{"name":"(short string) (false) String#slice and strict comparison","samples":30321044,"opsSec":60640436.760907},{"name":"(long string) (false) String#endsWith","samples":26738100,"opsSec":53469506.47330164},{"name":"(long string) (false) String#slice and strict comparison","samples":26462276,"opsSec":52912233.92611753}]}-->
