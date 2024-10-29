## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|114,778,906|57392271|
|(short string) (true) String#slice and strict comparison|55,892,450|27949291|
|(long string) (true) String#endsWith|66,924,190|33462114|
|(long string) (true) String#slice and strict comparison|51,123,953|25565907|
|(short string) (false) String#endsWith|91,773,522|45886780|
|(short string) (false) String#slice and strict comparison|56,076,158|28053756|
|(long string) (false) String#endsWith|85,147,612|42580695|
|(long string) (false) String#slice and strict comparison|51,588,440|25797114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:49:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":114778906.35569793,"samples":57392271},{"name":"(short string) (true) String#slice and strict comparison","opsSec":55892450.039306186,"samples":27949291},{"name":"(long string) (true) String#endsWith","opsSec":66924190.65630162,"samples":33462114},{"name":"(long string) (true) String#slice and strict comparison","opsSec":51123953.589887656,"samples":25565907},{"name":"(short string) (false) String#endsWith","opsSec":91773522.18930887,"samples":45886780},{"name":"(short string) (false) String#slice and strict comparison","opsSec":56076158.24979012,"samples":28053756},{"name":"(long string) (false) String#endsWith","opsSec":85147612.60539478,"samples":42580695},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51588440.29288354,"samples":25797114}]}-->
