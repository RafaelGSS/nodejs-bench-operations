## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|114,240,851|57120453|
|(short string) (true) String#slice and strict comparison|56,258,835|28131294|
|(long string) (true) String#endsWith|65,294,445|32647421|
|(long string) (true) String#slice and strict comparison|51,784,008|25892011|
|(short string) (false) String#endsWith|93,726,820|46867823|
|(short string) (false) String#slice and strict comparison|56,345,830|28173253|
|(long string) (false) String#endsWith|85,028,950|42515781|
|(long string) (false) String#slice and strict comparison|50,998,013|25499017|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:01:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":114240851.39287303,"samples":57120453},{"name":"(short string) (true) String#slice and strict comparison","opsSec":56258835.64817994,"samples":28131294},{"name":"(long string) (true) String#endsWith","opsSec":65294445.27095053,"samples":32647421},{"name":"(long string) (true) String#slice and strict comparison","opsSec":51784008.53615778,"samples":25892011},{"name":"(short string) (false) String#endsWith","opsSec":93726820.12025656,"samples":46867823},{"name":"(short string) (false) String#slice and strict comparison","opsSec":56345830.18811272,"samples":28173253},{"name":"(long string) (false) String#endsWith","opsSec":85028950.08071141,"samples":42515781},{"name":"(long string) (false) String#slice and strict comparison","opsSec":50998013.90678252,"samples":25499017}]}-->
