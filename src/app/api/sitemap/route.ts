import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // Get the path to the sitemap.xml file in the public directory
    const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
    
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Return the file content with the correct Content-Type header
    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
      },
    });
  } catch (error) {
    console.error('Error serving sitemap:', error);
    return new NextResponse('Error serving sitemap', { status: 500 });
  }
}
