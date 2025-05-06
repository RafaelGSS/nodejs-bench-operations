## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|87,669,583|43905543|
|(short string) (true) String#slice and strict comparison|57,320,293|28688500|
|(long string) (true) String#startsWith|66,700,171|33352116|
|(long string) (true) String#slice and strict comparison|52,248,185|26126168|
|(short string) (false) String#startsWith|93,131,559|46565868|
|(short string) (false) String#slice and strict comparison|57,055,401|28539094|
|(long string) (false) String#startsWith|84,588,269|42295115|
|(long string) (false) String#slice and strict comparison|51,507,369|25759440|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:22:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43905543,"opsSec":87669583.43487443},{"name":"(short string) (true) String#slice and strict comparison","samples":28688500,"opsSec":57320293.4922105},{"name":"(long string) (true) String#startsWith","samples":33352116,"opsSec":66700171.42696387},{"name":"(long string) (true) String#slice and strict comparison","samples":26126168,"opsSec":52248185.50863957},{"name":"(short string) (false) String#startsWith","samples":46565868,"opsSec":93131559.0500378},{"name":"(short string) (false) String#slice and strict comparison","samples":28539094,"opsSec":57055401.32792845},{"name":"(long string) (false) String#startsWith","samples":42295115,"opsSec":84588269.41309154},{"name":"(long string) (false) String#slice and strict comparison","samples":25759440,"opsSec":51507369.95707991}]}-->
