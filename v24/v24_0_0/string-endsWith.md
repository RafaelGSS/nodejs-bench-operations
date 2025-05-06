## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|82,748,023|41374025|
|(short string) (true) String#slice and strict comparison|56,424,090|28217201|
|(long string) (true) String#endsWith|66,720,945|33581413|
|(long string) (true) String#slice and strict comparison|49,776,962|24888486|
|(short string) (false) String#endsWith|91,227,748|45614252|
|(short string) (false) String#slice and strict comparison|56,170,457|28085895|
|(long string) (false) String#endsWith|86,197,200|43098636|
|(long string) (false) String#slice and strict comparison|51,468,689|25735049|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:11:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":41374025,"opsSec":82748023.68612845},{"name":"(short string) (true) String#slice and strict comparison","samples":28217201,"opsSec":56424090.49746159},{"name":"(long string) (true) String#endsWith","samples":33581413,"opsSec":66720945.18977823},{"name":"(long string) (true) String#slice and strict comparison","samples":24888486,"opsSec":49776962.1441615},{"name":"(short string) (false) String#endsWith","samples":45614252,"opsSec":91227748.8166953},{"name":"(short string) (false) String#slice and strict comparison","samples":28085895,"opsSec":56170457.52440661},{"name":"(long string) (false) String#endsWith","samples":43098636,"opsSec":86197200.80111215},{"name":"(long string) (false) String#slice and strict comparison","samples":25735049,"opsSec":51468689.50784292}]}-->
