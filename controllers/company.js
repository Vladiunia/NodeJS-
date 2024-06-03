import Company from "../models/Company.js"


export async function getAllCompanies (req, res) {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export async function getCompanieAndDescriptionById(req, res) {
    try {
        const company = await Company.findById(req.params.id).populate('profileId');
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.json(company);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export async function addNewCompany (req, res)  {
    const company = new Company({
        name: req.body.name,
        industry: req.body.industry,
        location: req.body.location,
        profileId: req.body.profileId
    });
    try {
        const newCompany = await company.save();
        res.status(201).json(newCompany);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export async function updateCompanyById (req, res) {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });

        company.name = req.body.name || company.name;
        company.industry = req.body.industry || company.industry;
        company.location = req.body.location || company.location;
        company.profileId = req.body.profileId || company.profileId;

        const updatedCompany = await company.save();
        res.json(updatedCompany);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};