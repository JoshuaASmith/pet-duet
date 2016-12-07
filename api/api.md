# API Docs

## Owner API Functions:
### GET /owners

Retrieves all owners as an array

**Sample Request**

```
GET /owners
```

```
{
  "rows": [
    {
      "ownerFirstName": "Joshua",
      "ownerLastName": "Smith",
      "ownerAddress": "5095 Stone Fence Dr, Colorado Springs, CO 80923",
      "ownerPhone": "307-262-6835",
      "ownerEmail": "joshua@smith.com",
      "type": "owner",
      "_id": "owner_smith_joshua_joshua@smith.com",
      "_rev": "2-c2e1681013626a82f7ebd35083b304a6"
    },
    {
      "ownerFirstName": "Laurel",
      "ownerLastName": "Smith",
      "ownerAddress": "5095 Stone Fence Dr, Colorado Springs, CO 80923",
      "ownerPhone": "307-262-6835",
      "ownerEmail": "joshua@smith.com",
      "type": "owner",
      "_id": "owner_smith_joshua_joshua@smith.com",
      "_rev": "2-c2e1681013626a82f7ebd35083b304a6"
    }
  ]
}
```

### GET /owners/:id

Get a single owner of pets from the database

**SAMPLE REQUEST**

```
GET /owners/owner_Smith_Joshua_Dooley
```

**SAMPLE RESPONSE**

```
{
  "ownerFirstName": "Joshua",
  "ownerLastName": "Smith",
  "ownerAddress": "5095 Stone Fence Dr, Colorado Springs, CO 80923",
  "ownerPhone": "307-262-6835",
  "ownerEmail": "joshua@smith.com",
  "type": "owner",
  "_id": "owner_smith_joshua_joshua@smith.com",
  "_rev": "2-c2e1681013626a82f7ebd35083b304a6"
}
```
