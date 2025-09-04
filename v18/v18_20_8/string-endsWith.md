## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,592,429|26296222|
|(short string) (true) String#slice and strict comparison|51,537,677|25770743|
|(long string) (true) String#endsWith|48,486,798|24243688|
|(long string) (true) String#slice and strict comparison|46,169,584|23091616|
|(short string) (false) String#endsWith|57,392,598|28696358|
|(short string) (false) String#slice and strict comparison|60,291,812|30161762|
|(long string) (false) String#endsWith|51,497,536|25748969|
|(long string) (false) String#slice and strict comparison|52,697,174|26351146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:37:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26296222,"opsSec":52592429.2741198},{"name":"(short string) (true) String#slice and strict comparison","samples":25770743,"opsSec":51537677.77791363},{"name":"(long string) (true) String#endsWith","samples":24243688,"opsSec":48486798.61920204},{"name":"(long string) (true) String#slice and strict comparison","samples":23091616,"opsSec":46169584.82476082},{"name":"(short string) (false) String#endsWith","samples":28696358,"opsSec":57392598.45995835},{"name":"(short string) (false) String#slice and strict comparison","samples":30161762,"opsSec":60291812.79755737},{"name":"(long string) (false) String#endsWith","samples":25748969,"opsSec":51497536.731193796},{"name":"(long string) (false) String#slice and strict comparison","samples":26351146,"opsSec":52697174.57737679}]}-->
