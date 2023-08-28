---
Priority: 1
ProjectType: JIRA=-CSTL-334
DueDate: 2023-08-29
Created: 2023-08-25
Status: In Progress
tags: #work #project/active
obsidianUIMode: preview
---
%% tags: #work #project/active %%
# Goals
Implement command line arguments to create transforms for the transaction editor.
#### Format
```
`source>dest[>format]`
```
- Source: The source tag being transformed:
	- Name
- Dest: The destination for the transformed tag
	- TName
- Format: optional argument that specifies the transform format type. I.e: DateDefault, NameLastSpaceComma, etc.
	- Nice to have: Code uses source name to infer format type
	- `TransactionTransformFormat` Need to convert string to enum;

## Todo's
- [x] Create base command for transform ⏫ ✅ 2023-08-25
- [x] Set `>Format` as an optional command ⏫ ✅ 2023-08-28
- [x] Create string conversion from string to `TransactionTransformFormat` ⏫ ✅ 2023-08-28
- [ ] Create functionality to infer format based of name hints 🔽

## Confluence Article Updates
`Condition Condition2 CreateXmlTag XmlAttribute XmlXPath ConnectCicTag LiteralSTring JustifyAndSize FillString Transform`

  
  
| Identifier | Syntax                      | Transaction Command | Examples                            |
| ---------- | --------------------------- | ------------------- | ----------------------------------- |
| Transform  | `Source>Destination`        | Transform           | `Name>TName>NameWithSpaceLastComma` |
|            | `Source>Destination>Format` |                     | `Name>TName>11`                     |
|            |                             |                     | `BirthDate>TBirthDate`              |

  

#### Transform Command

A Transform Command is represented by entering data that needs transformed/normalized like Name, Dates, and Addresses, surrounded by back ticks (`) at the end of the command line.
To transform a name and a date it could look like this.
```

".NAM/" `Name>TName>NameWithSpaceLastComma`; ".DOB/" `BirthDate>TBirthDate`

```
>Requirements: Source Tag and Destination Tag
>Optional: Format - a string or index matching the TransactionTransformFormat Enum

The resulting segment would appear.
![[Pasted image 20230828114616.png]]

  

```

Segment         = [Condition2] [Condition] [CreateXmlTag] [CreateXmlAttribute] [CreateMove] [ValueSource] [DefaultValue] [[Justify]MinMax] [FillString] [Transform]

Condition2      = '$' ['!'] ConnectCicIdentifier ('&' ['!'] ConnectCicIdentifier)*  '$'

Transform       = "`" SourceTag'>'DestinationTag('>'Format) "`"

```